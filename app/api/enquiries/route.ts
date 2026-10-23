import { createHmac } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, StorageNotConfigured } from '@/lib/database';
import { validateEnquiry } from '@/lib/validation';

export const runtime='nodejs';
export async function POST(request:NextRequest) {
  if (Number(request.headers.get('content-length') || 0) > 16_384) return NextResponse.json({message:'Please shorten your enquiry.'},{status:413});
  const validation=validateEnquiry(await request.json().catch(()=>null));
  if(!validation.ok) return NextResponse.json({message:'Please review the highlighted details.',errors:validation.errors},{status:400});
  try {
    const db=getDatabase();
    const ip=request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    const ipHash=createHmac('sha256',process.env.SUPABASE_SERVICE_ROLE_KEY!).update(ip).digest('hex');
    const input=validation.data;
    const {data,error}=await db.rpc('submit_enquiry',{p_name:input.name,p_phone:input.phone,p_email:input.email || null,p_service:input.service,p_callback:input.callback,p_message:input.message,p_ip_hash:ipHash});
    if(error) {
      if(error.message==='RATE_LIMITED') return NextResponse.json({message:'Too many enquiries were sent recently. Please try again later or call us.'},{status:429});
      throw new Error('Unable to save enquiry');
    }
    return NextResponse.json(data,{status:201});
  } catch(error) {
    return NextResponse.json({message:'We could not save your enquiry. Please try again or contact Spoorthi Groups directly.'},{status:error instanceof StorageNotConfigured?503:500});
  }
}
