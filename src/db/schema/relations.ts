import { relations } from "drizzle-orm";
import { role, post, user } from "./main";

export const userRelations = relations(user, ({ many, one }) => ({
  posts: many(post),
  role:  one(role, {
    fields: [user.role],
    references: [role.name]
  })
}));

export const postRelations = relations(post, ({ one }) => ({
  createdBy: one(user, {
    fields: [post.createdBy],
    references: [user.id],
  }),
}));


export const roleRelations = relations(role, ({ many, one }) => ({
  users: many(user),
}));