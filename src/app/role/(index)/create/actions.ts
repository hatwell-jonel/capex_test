"use server";

import { db } from "@/db";
import { role } from "@/db/schema";
import type { New } from "./validations";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

const table = role;

export async function create(data: New) {
  try {
    await db.insert(table).values(data);
    revalidatePath("/role");
    return {
      message: "Successfully created",
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Error creating",
      success: false,
    };
  }
}