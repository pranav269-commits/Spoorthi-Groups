import test from 'node:test';
import assert from 'node:assert/strict';
import { canAccessAdmin } from '../lib/admin-access.ts';
import { csvCell } from '../lib/csv.ts';

test('only explicitly allowed emails have production admin access', () => {
  assert.equal(canAccessAdmin(' Owner@Example.com ', 'admin@example.com,owner@example.com'), true);
  assert.equal(canAccessAdmin('visitor@example.com', 'owner@example.com'), false);
  assert.equal(canAccessAdmin('visitor@sites.test', ''), false);
  assert.equal(canAccessAdmin('visitor@sites.test', '', true), true);
  assert.equal(canAccessAdmin('visitor@example.com', '', true), false);
});

test('CSV export quotes customer text and prevents spreadsheet formula execution', () => {
  assert.equal(csvCell('A "quoted", name'), '"A ""quoted"", name"');
  assert.equal(csvCell('=HYPERLINK("bad")'), '"\'=HYPERLINK(""bad"")"');
  assert.equal(csvCell('  @SUM(1)'), '"\'  @SUM(1)"');
  assert.equal(csvCell('+919999999999'), '"\'+919999999999"');
  assert.equal(csvCell('\tformula'), '"\'\tformula"');
});
