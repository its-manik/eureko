import { pgTable, varchar } from "drizzle-orm/pg-core";

export const waitlistModel = pgTable("waitlist_users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
});
