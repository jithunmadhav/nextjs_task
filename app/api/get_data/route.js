import connectMongoDB from "@/libs/mongodb";
import userModel from "@/models/userSchema";
import { NextResponse } from "next/server";

export async function GET(request) {
   try {
    let id=request.nextUrl.searchParams.get("id")
    await connectMongoDB();
   let result= await userModel.findOne({_id:id})
    return NextResponse.json({ result }, { status: 200 }); 
  } catch (error) {
    console.log(error);
   }
  }