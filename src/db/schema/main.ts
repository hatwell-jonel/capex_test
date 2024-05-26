import { bigint, serial, timestamp, varchar, int } from "drizzle-orm/mysql-core";
import { capexTable } from "./_table";
import { sql } from "drizzle-orm";

const now = sql`CURRENT_TIMESTAMP()`;

const defaultColumns = {
  id: int("id").primaryKey().autoincrement(),
  createdAt: timestamp("created_at").notNull().default(now),
  updatedAt: timestamp("updated_at").onUpdateNow(),
};

export const user = capexTable("user", {
  ...defaultColumns,
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull().default('admin'),
});

export const post = capexTable("post", {
  ...defaultColumns,
  title: varchar("title", { length: 255 }).notNull(),
  content: varchar("content", { length: 255 }).notNull(),
  createdBy: bigint("created_by", { mode: "number" }).notNull(),
});


export const role = capexTable("role", {
  ...defaultColumns,
  user_id: varchar("user_id", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
});


// export const role = capexTable("role", {
//   ...defaultColumns,
//   user_id: int("user_id").notNull().references(() => user.id),
//   name: varchar("name", { length: 255 }).notNull(),
// });
