import connectDB from "@/helper/mongoDB";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectDB();
    const user = await User.findById({ _id: id }).select(`-userPassword`);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}
