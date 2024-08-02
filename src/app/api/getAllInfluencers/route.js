import connectDB from "@/helper/mongoDB";
import Influencer from "@/models/influencer";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const allInfluencers = await Influencer.find({}).select("-_id -__v");
    return NextResponse.json({
      success: true,
      allInfluencers,
    });
  } catch (error) {
    return NextResponse.json({ success: false });
    console.log(error);
  }
}
