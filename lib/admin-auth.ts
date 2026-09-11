import { env } from 'cloudflare:workers';
import { getChatGPTUser } from '@/app/chatgpt-auth';

export async function getAuthorizedAdmin() {
  const user = await getChatGPTUser();
  if (!user) return null;
  const configured = (env.ADMIN_EMAILS || '').split(',').map((email) => email.trim().toLowerCase()).filter(Boolean);
  const localPreview = user.email.endsWith('@sites.test');
  return configured.includes(user.email.toLowerCase()) || localPreview ? user : null;
}
