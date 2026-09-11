import test from 'node:test';
import assert from 'node:assert/strict';
import { enquiryReference, normalizeIndianPhone, validateEnquiry } from '../lib/validation.ts';

test('normalizes supported Indian mobile formats', () => {
  assert.equal(normalizeIndianPhone('98765 43210'), '+919876543210');
  assert.equal(normalizeIndianPhone('+91 98765 43210'), '+919876543210');
  assert.equal(normalizeIndianPhone('12345'), null);
});

test('validates and sanitizes an enquiry', () => {
  const result = validateEnquiry({ name:'  Asha <b>Rao</b> ', phone:'9876543210', email:'ASHA@example.com', service:'CHITS', callback:'Morning', message:'Please explain the available process.', website:'' });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.phone, '+919876543210');
    assert.equal(result.data.email, 'asha@example.com');
    assert.equal(result.data.name.includes('<'), false);
  }
});

test('rejects invalid fields and honeypot submissions', () => {
  const result = validateEnquiry({ name:'A', phone:'123', email:'bad', service:'UNKNOWN', callback:'', message:'tiny', website:'spam.example' });
  assert.equal(result.ok, false);
  if (!result.ok) assert.deepEqual(Object.keys(result.errors).sort(), ['email','message','name','phone','service','website']);
});

test('creates stable human-readable references', () => {
  assert.equal(enquiryReference(2026, 123), 'SG-2026-000123');
});
