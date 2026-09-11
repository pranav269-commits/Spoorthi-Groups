import { integer, sqliteTable, text, index, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const enquiries = sqliteTable('enquiries', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  reference: text('reference').notNull(), name: text('name').notNull(), phone: text('phone').notNull(),
  email: text('email'), service: text('service').notNull(), callback: text('callback').notNull(),
  message: text('message').notNull().default(''), status: text('status').notNull().default('NEW'),
  notes: text('notes').notNull().default(''), source: text('source').notNull().default('WEBSITE'),
  ipHash: text('ip_hash'), createdAt: text('created_at').notNull(), updatedAt: text('updated_at').notNull(),
}, (table) => [
  uniqueIndex('uq_enquiries_reference').on(table.reference),
  index('idx_enquiries_status_created').on(table.status, table.createdAt),
  index('idx_enquiries_phone_service').on(table.phone, table.service, table.createdAt),
]);

export const requestLimits = sqliteTable('request_limits', {
  key: text('key').primaryKey(), windowStart: integer('window_start').notNull(), requestCount: integer('request_count').notNull(),
});
