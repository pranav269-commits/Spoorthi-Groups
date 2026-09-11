export const SERVICE_VALUES = ['CHITS', 'HEALTH_INSURANCE', 'LIFE_INSURANCE', 'LOANS', 'REAL_ESTATE', 'GENERAL'] as const;
export type ServiceValue = (typeof SERVICE_VALUES)[number];

export type EnquiryInput = {
  name: string; phone: string; email?: string; service: ServiceValue;
  callback: string; message: string; website?: string;
};

export function normalizeIndianPhone(value: string) {
  const digits = value.replace(/\D/g, '');
  const national = digits.startsWith('91') && digits.length === 12 ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(national) ? `+91${national}` : null;
}

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, max) : '';
}

export function validateEnquiry(raw: unknown): { ok: true; data: EnquiryInput & { phone: string } } | { ok: false; errors: Record<string, string> } {
  const source = raw && typeof raw === 'object' ? raw as Record<string, unknown> : {};
  const name = clean(source.name, 80);
  const phone = normalizeIndianPhone(clean(source.phone, 20));
  const email = clean(source.email, 160).toLowerCase();
  const service = clean(source.service, 40) as ServiceValue;
  const callback = clean(source.callback, 40) || 'Any convenient time';
  const message = clean(source.message, 1200);
  const website = clean(source.website, 100);
  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Please enter your name.';
  if (!phone) errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';
  if (!SERVICE_VALUES.includes(service)) errors.service = 'Choose a service.';
  if (message && message.length < 10) errors.message = 'Please add a little more detail or leave this blank.';
  if (website) errors.website = 'Unable to submit this enquiry.';
  if (Object.keys(errors).length || !phone) return { ok: false, errors };
  return { ok: true, data: { name, phone, email, service, callback, message, website } };
}

export function enquiryReference(year: number, id: number) {
  return `SG-${year}-${String(id).padStart(6, '0')}`;
}
