import connectDB from "@/helper/mongoDB";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/user";

export async function POST(request) {
  try {
    await connectDB();

    const reqBody = await request.json();

    const { userFullName, userEmail, userPassword } = reqBody;

    const user = await User.findOne({ userEmail }).select(
      "userFullName userEmail"
    );

    if (user) {
      return NextResponse.json({
        message: "User Already Exists",
        success: false,
      });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPasswrod = bcryptjs.hashSync(userPassword, salt);

    await User.create({
      userFullName,
      userEmail,
      userPassword: hashedPasswrod,
      userRole: "client",
    });

    return NextResponse.json({
      message: "User sign up successful",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: `Server Error while Sign Up`,
      success: false,
    });
  }
}
