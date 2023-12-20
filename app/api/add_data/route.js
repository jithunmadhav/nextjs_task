import connectMongoDB from "@/libs/mongodb";
import userModel from "@/models/userSchema";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(request) {
   try {
    let data = await request.json();
    const password=data.password
    let bcrypPassword=await bcrypt.hash(password,10)
    data.password=bcrypPassword
    console.log(password,bcrypPassword);

    await connectMongoDB();
   let result= await userModel.create(data);
    return NextResponse.json({ result}, { status: 201 });
   } catch (error) {
    console.log(error);
   }
  }

export async function GET(request){
    try {
     let email=request.nextUrl.searchParams.get("email")
    let mobile=request.nextUrl.searchParams.get("mobile")
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