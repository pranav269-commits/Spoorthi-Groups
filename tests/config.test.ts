import test from 'node:test'; import assert from 'node:assert/strict';
import { createWhatsAppLink, services } from '../lib/config.ts';
test('creates an encoded WhatsApp link',()=>{const url=createWhatsAppLink('Hello & welcome');assert.equal(url,'https://wa.me/918712121301?text=Hello%20%26%20welcome')});
test('publishes a unique route for every service',()=>{assert.equal(new Set(services.map(service=>service.slug)).size,5)});
