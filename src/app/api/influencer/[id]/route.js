import connectDB from "@/helper/mongoDB";
import Influencer from "@/models/influencer";
import User from "@/models/user";

import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    const { id } = params;
    const { instaId, fee, followers } = await request.json();

    await connectDB();
    const { userFullName } = await User.findById({ _id: id });

    await Influencer.create({
      instaId,
      fee,
      _id: id,
      fullName: userFullName,
      followers,
    });
    await User.findByIdAndUpdate({ _id: id }, { userRole: `influencer` });
    return NextResponse.json({
      success: true,
      message: `Influencer Info Uploaded`,
      userRole: `influencer`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "server error",
    });
  }
}
