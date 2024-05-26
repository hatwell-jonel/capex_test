import { NextResponse } from "next/server";

export async function  GET(){
    return   NextResponse.json({hello: "wolrd!"});
}

export async function  POST(request:  Request){
    const data = await request.json();
    return NextResponse.json({data});
}

export async function  PUT(){
    const  data =  { 
        name: "Jonel Hatwell"
    }
    return   NextResponse.json({data});
}

export async function  DELETE(){
    return   NextResponse.json({hello: "wolrd!"});
}
