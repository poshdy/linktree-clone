import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  userName: varchar("user_name", { length: 100 }).notNull().unique(),
});

export const page = pgTable("page", {
  pageId: serial("page_id").primaryKey().notNull(),
  bio: varchar("bio", { length: 200 }),
});
