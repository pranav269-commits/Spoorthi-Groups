import test from 'node:test';
import assert from 'node:assert/strict';
const origin=process.env.SITE_TEST_URL || 'http://localhost:3001';

test('all public pages and assets respond on native Next.js', async()=>{
  for(const path of ['/','/about','/why-spoorthi','/insights','/privacy','/terms','/disclaimer','/services/chits','/services/health-insurance','/services/life-insurance','/services/loans','/services/real-estate','/robots.txt','/sitemap.xml','/brand/spoorthi-groups-logo.png']) {
    const response=await fetch(origin+path);
    assert.equal(response.status,200,path);
  }
  assert.equal((await fetch(origin+'/services/nonexistent-service')).status,404);
});
test('anonymous and spoofed ChatGPT headers cannot access admin',async()=>{
  const headers={'oai-authenticated-user-id':'forged','oai-authenticated-user-email':'admin@example.test'};
  const page=await fetch(origin+'/admin',{redirect:'manual',headers});
  assert.equal(page.status,307); assert.equal(new URL(page.headers.get('location'),origin).pathname,'/admin/login');
  const api=await fetch(origin+'/api/admin/enquiries/1',{method:'PATCH',headers:{...headers,'content-type':'application/json'},body:JSON.stringify({status:'CLOSED'})});
  assert.equal(api.status,401);
});
test('invalid enquiries are rejected before storage is accessed',async()=>{
  const response=await fetch(origin+'/api/enquiries',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name:'A',phone:'1',service:'GENERAL'})});
  assert.equal(response.status,400);
  const body=await response.json(); assert.ok(body.errors.name); assert.ok(body.errors.phone);
});
test('an unconfigured backend cannot falsely acknowledge saved enquiries',async()=>{
  if(process.env.SUPABASE_SERVICE_ROLE_KEY) return;
  const response=await fetch(origin+'/api/enquiries',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name:'Local QA',phone:'9999999999',service:'GENERAL',message:'Test only, do not contact.'})});
  assert.equal(response.status,503);
  assert.equal((await response.json()).reference,undefined);
});
