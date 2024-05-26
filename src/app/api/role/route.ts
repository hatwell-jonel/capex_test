import { db } from "@/db";
import { role } from "@/db/schema";
import { NextResponse} from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    try {

        const { name, user_id } = await request.json();
        const newRole = await db.insert(role)
        .values(await request.json())
        .execute();

        return NextResponse.json({ name:  'aaasdasd' });


        // Continue with your logic...
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
    

}