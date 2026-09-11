CREATE TABLE `enquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`reference` text NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text,
	`service` text NOT NULL,
	`callback` text NOT NULL,
	`message` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'NEW' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`source` text DEFAULT 'WEBSITE' NOT NULL,
	`ip_hash` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `uq_enquiries_reference` ON `enquiries` (`reference`);
--> statement-breakpoint
CREATE INDEX `idx_enquiries_status_created` ON `enquiries` (`status`,`created_at`);
--> statement-breakpoint
CREATE INDEX `idx_enquiries_phone_service` ON `enquiries` (`phone`,`service`,`created_at`);
--> statement-breakpoint
CREATE TABLE `request_limits` (
	`key` text PRIMARY KEY NOT NULL,
	`window_start` integer NOT NULL,
	`request_count` integer NOT NULL
);
