import { NextRequest, NextResponse } from 'next/server';
import { getAuthorizedAdmin } from '@/lib/admin-auth';
import { getDatabase } from '@/lib/database';

export const runtime='nodejs';
export async function PATCH(request:NextRequest,{params}:{params:Promise<{id:string}>}) {
  if(!await getAuthorizedAdmin()) return NextResponse.json({message:'Unauthorized'},{status:401});
  const origin=request.headers.get('origin');
  if(origin && origin!==request.nextUrl.origin) return NextResponse.json({message:'Invalid request origin'},{status:403});
  const {id}=await params; const numericId=Number(id);
  if(!Number.isSafeInteger(numericId)||numericId<1) return NextResponse.json({message:'Invalid enquiry'},{status:400});
  const body=await request.json().catch(()=>null);
  if(!body||typeof body!=='object'||Array.isArray(body)) return NextResponse.json({message:'Invalid changes'},{status:400});
  const patch:Record<string,string>={updated_at:new Date().toISOString()};
  if(typeof body.status==='string'&&['NEW','FOLLOW_UP','CONTACTED','CLOSED'].includes(body.status)) patch.status=body.status;
  if(typeof body.notes==='string') patch.notes=body.notes.replace(/[<>]/g,'').trim().slice(0,2000);
  if(!patch.status && patch.notes===undefined) return NextResponse.json({message:'No valid changes'},{status:400});
  try {
    const {data,error}=await getDatabase().from('enquiries').update(patch).eq('id',numericId).select('id').maybeSingle();
    if(error) throw new Error('Save failed');
    if(!data) return NextResponse.json({message:'Enquiry not found'},{status:404});
    return NextResponse.json({ok:true});
  } catch { return NextResponse.json({message:'Changes could not be saved. Please retry.'},{status:503}); }
}
