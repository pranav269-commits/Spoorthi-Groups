// Admin session tokens for the /admin password login.
//
// Pure functions only: no Cloudflare bindings, no Next.js imports, so this
// module can be unit-tested in plain Node (see tests/admin-session.test.ts).
// Tokens are `base64url(payload).base64url(HMAC-SHA256(payload))` where the
// payload is `<email>:<expiry-epoch-ms>`. The HMAC key is ADMIN_SESSION_SECRET
// when set, otherwise ADMIN_PASSWORD (see lib/admin-auth.ts).

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}

function base64UrlDecode(value: string): Uint8Array {
  const normalized = value.replaceAll('-', '+').replaceAll('_', '/');
  const binary = atob(normalized + '='.repeat((4 - (normalized.length % 4)) % 4));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmac(secret: string, payload: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return new Uint8Array(signature);
}

export async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

/** Fixed-length comparison: both values are hashed first, so password length is not leaked. */
export async function verifyPassword(candidate: string, stored: string): Promise<boolean> {
  if (!candidate || !stored) return false;
  const [a, b] = await Promise.all([sha256Hex(candidate), sha256Hex(stored)]);
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function createSessionToken(email: string, secret: string, now = Date.now()): Promise<string> {
  const payload = `${email.toLowerCase()}:${now + SESSION_TTL_MS}`;
  const signature = await hmac(secret, payload);
  return `${base64UrlEncode(new TextEncoder().encode(payload))}.${base64UrlEncode(signature)}`;
}

/** Returns the admin email encoded in a valid, unexpired token, or null. */
export async function verifySessionToken(token: string, secret: string, now = Date.now()): Promise<string | null> {
  const [payloadPart, signaturePart] = token.split('.');
  if (!payloadPart || !signaturePart) return null;
  let payload: string;
  try {
    payload = new TextDecoder().decode(base64UrlDecode(payloadPart));
  } catch {
    return null;
  }
  const [email, expiryRaw] = payload.split(':');
  const expiry = Number(expiryRaw);
  if (!email || !Number.isFinite(expiry) || expiry <= now) return null;
  const expected = base64UrlEncode(await hmac(secret, payload));
  if (expected.length !== signaturePart.length) return null;
  let diff = 0;
  for (let i = 0; i < expected.length; i += 1) diff |= expected.charCodeAt(i) ^ signaturePart.charCodeAt(i);
  return diff === 0 ? email : null;
}
