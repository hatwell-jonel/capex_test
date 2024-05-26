import { NextResponse, NextRequest  } from "next/server";

const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "User" }
];


export async function  GET(request:NextRequest){
    const { pathname } = request.nextUrl;
    const id = pathname.split('/').pop();
    console.log('Role ID:', id);
    return NextResponse.json({ id });
}
