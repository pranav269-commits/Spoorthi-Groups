import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';

test('Postgres migration protects enquiries and atomically handles duplicates and rate limits', async () => {
  const db=new PGlite();
  try {
    await db.exec('create role anon; create role authenticated; create role service_role bypassrls; grant usage on schema public to anon,authenticated,service_role;');
    await db.exec(await readFile(new URL('../supabase/migrations/202610230001_enquiries.sql',import.meta.url),'utf8'));
    await db.exec('set role anon');
    await assert.rejects(db.query('select * from public.enquiries'),/permission denied/);
    await assert.rejects(db.query("select public.submit_enquiry('Test','9999999999',null,'GENERAL','Any convenient time','','fake')"),/permission denied/);
    await db.exec('reset role; set role authenticated');
    await assert.rejects(db.query('select * from public.enquiries'),/permission denied/);
    await db.exec('reset role; set role service_role');
    const submit=async(phone,ip='test-hash') => {
      const result=await db.query('select public.submit_enquiry($1,$2,$3,$4,$5,$6,$7) as result',['QA test',phone,null,'GENERAL','Any convenient time','Test only, do not contact.',ip]);
      return result.rows[0].result;
    };
    const first=await submit('+919999999999');
    assert.match(first.reference,/^SG-\d{4}-\d{6}$/);
    assert.equal(first.duplicate,false);
    const duplicate=await submit('+919999999999');
    assert.equal(duplicate.reference,first.reference);
    assert.equal(duplicate.duplicate,true);
    assert.equal((await db.query('select count(*) as count from public.enquiries')).rows[0].count,1);
    for (let i=1;i<5;i++) await submit(`+91999999999${i}`);
    await assert.rejects(submit('+919999999995'),/RATE_LIMITED/);
    assert.equal((await db.query('select count(*) as count from public.enquiries')).rows[0].count,5);
    assert.equal((await submit('+919999999996','different-ip')).duplicate,false);
    await db.query("update public.enquiries set notes=$1,status='CLOSED' where reference=$2",['Saved QA note',first.reference]);
    const saved=(await db.query('select notes,status from public.enquiries where reference=$1',[first.reference])).rows[0];
    assert.equal(saved.notes,'Saved QA note'); assert.equal(saved.status,'CLOSED');
    await assert.rejects(db.query("update public.enquiries set status='INVALID'"),/check constraint/);
  } finally {await db.close();}
});
