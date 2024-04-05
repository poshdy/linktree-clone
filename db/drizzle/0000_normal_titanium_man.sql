CREATE TABLE IF NOT EXISTS "page" (
	"page_id" serial PRIMARY KEY NOT NULL,
	"bio" varchar(200)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"user_name" varchar(100) NOT NULL,
	CONSTRAINT "user_user_name_unique" UNIQUE("user_name")
);
