// app/actions/getUsers.ts
'use server';

import { db } from '@/db/index';
import { role } from '@/db/schema/main';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { New } from '../validations';

const page  = "role2"
const table = role;

export async function getRoles() {
  return await db.select().from(table);
}

export async function getRole() {
  // return await db.select().from(table).where();
}

export async function createRoles(data: New) {
  await db.insert(table).values(data);
  revalidatePath(`${page}`);
  return {
    message: "Successfully created",
    success: true,
  };
}

export async function updateRole(id: number, data: { name: string, user_id: string }) {
  // await db.update(table).set({ name, user_id }).where(table.id.equals(id));
}

export async function deleteRole(id: number) {
  await db.delete(table).where(eq(table.id, id));
  revalidatePath(`${page}`);
  return {
    message: "Successfully deleted.",
    success: true,
  };
}