import connectMongoDB from "@/libs/mongodb";
import userModel from "@/models/userSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
   try {
    const data = await request.json();
    await connectMongoDB();
    await userModel.create(data);
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
   } catch (error) {
    console.log(error);
   }
  }

export async function GET(request){
    try {
     let email=request.nextUrl.searchParams.get("email")
    let mobile=request.nextUrl.searchParams.get("mobile")
    console.log(email,mobile)
    await connectMongoDB();
    const result = await userModel.findOne({
        $or: [{ email }, { mobile }],
    });
    if(result!=null){
        return NextResponse.json({err:true,message:'Data excist'},{ status: 200 });
    }else{
        return NextResponse.json({err:false,message:'Data not excist'},{ status: 404 });
    }
    } catch (error) {
        console.log(error);
    }
}