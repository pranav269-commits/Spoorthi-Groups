export function canAccessAdmin(email: string, allowlist: string, development = false) {
  const normalized = email.trim().toLowerCase();
  const configured = allowlist.split(',').map(value => value.trim().toLowerCase()).filter(Boolean);
  return configured.includes(normalized) || (development && normalized.endsWith('@sites.test'));
}
