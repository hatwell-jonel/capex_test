CREATE TABLE `cpx_post` (
	`id` int AUTO_INCREMENT NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`title` varchar(255) NOT NULL,
	`content` varchar(255) NOT NULL,
	`created_by` bigint NOT NULL,
	CONSTRAINT `cpx_post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `cpx_role` (
	`id` int AUTO_INCREMENT NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`user_id` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `cpx_role_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `cpx_user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`role` varchar(255) NOT NULL DEFAULT 'admin',
	CONSTRAINT `cpx_user_id` PRIMARY KEY(`id`)
);
