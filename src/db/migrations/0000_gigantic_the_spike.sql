CREATE TABLE `tourist_attraction` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`tourist_name` varchar(100),
	`location` varchar(100),
	`coordinates` varchar(50),
	`operation_hours` varchar(100),
	`contact_information` varchar(100),
	`description` text,
	`price` varchar(20),
	`facilities` text,
	`activities` text,
	CONSTRAINT `tourist_attraction_id` PRIMARY KEY(`id`)
);
