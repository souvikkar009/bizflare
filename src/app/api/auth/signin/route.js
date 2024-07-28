import bcryptjs from "bcryptjs";
import connectDB from "@/helper/mongoDB";
import User from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connectDB();
    const reqBody = await request.json();
    const { userEmail, userPassword } = reqBody;
    const user = await User.findOne({ userEmail }).select(
      "userFullName userEmail userPassword businessId"
    );
    if (!user) {
      return NextResponse.json({
        message: "User doesn't exist",
        success: false,
      });
    }
    const isValidPassword = bcryptjs.compareSync(
      userPassword,
      user.userPassword
    );

    if (!isValidPassword) {
      return NextResponse.json({
        message: "Invalid Credential",
        success: false,
      });
    }

    const userData = {
      userEmail: user.userEmail,
      userFullName: user.userFullName,
      userId: user._id,
      businessId: user.businessId || null
    };

    const token = jwt.sign(userData, process.env.SIGNIN_TOKEN_SECRET, {
      expiresIn: "3d",
    });

    const response = NextResponse.json({
      message: "User Login Successfull",
      success: true,
      userData,
    });

    response.cookies.set("signInToken", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "server error",
      success: false,
    });
  }
}
