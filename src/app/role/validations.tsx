import { role } from "@/db/schema";
import { createInsertSchema } from "drizzle-zod";
import type { z } from "zod";

export const createSchema = createInsertSchema(role, {
  user_id: (schema) => schema.user_id.min(3),
  name: (schema) => schema.name.min(3).max(255),
});

export type New = z.output<typeof createSchema>;
