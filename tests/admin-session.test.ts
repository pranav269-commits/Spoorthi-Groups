import test from 'node:test';
import assert from 'node:assert/strict';
import { createSessionToken, verifyPassword, verifySessionToken } from '../lib/admin-session.ts';

test('accepts a valid session token and returns its email', async () => {
  const token = await createSessionToken('spoorthigroups22@gmail.com', 'test-secret', 1_000_000);
  assert.equal(await verifySessionToken(token, 'test-secret', 1_000_000), 'spoorthigroups22@gmail.com');
});

test('rejects a tampered token, a wrong secret and an expired token', async () => {
  const token = await createSessionToken('spoorthigroups22@gmail.com', 'test-secret', 1_000_000);
  const [payload, signature] = token.split('.');
  const tampered = `${payload}.${signature.slice(0, -1)}x`;
  assert.equal(await verifySessionToken(tampered, 'test-secret', 1_000_000), null);
  assert.equal(await verifySessionToken(token, 'other-secret', 1_000_000), null);
  assert.equal(await verifySessionToken(token, 'test-secret', 1_000_000 + 8 * 24 * 60 * 60 * 1000), null);
});

test('verifies the correct password and rejects wrong or empty ones', async () => {
  assert.equal(await verifyPassword('correct horse', 'correct horse'), true);
  assert.equal(await verifyPassword('wrong', 'correct horse'), false);
  assert.equal(await verifyPassword('', 'correct horse'), false);
  assert.equal(await verifyPassword('correct horse', ''), false);
});
