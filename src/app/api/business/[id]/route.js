import connectDB from "@/helper/mongoDB";
import Business from "@/models/business";
import User from "@/models/user";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectDB();
    const business = await Business.findById({ _id: id }).select(
      `businessName businessIndustry businessDomain businessType businessAddress`
    );
    return NextResponse.json(business);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request, { params }) {
  try {
    const { id } = params;
    const {
      businessName,
      businessIndustry,
      businessDomain,
      businessType,
      businessAddress,
    } = await request.json();

    console.log(
      businessName,
      businessIndustry,
      businessDomain,
      businessType,
      businessAddress
    );

    await connectDB();
    await Business.create({
      businessName,
      businessIndustry,
      businessDomain,
      businessType,
      businessAddress,
      ownerId: id,
    });
    const businessId = await Business.findOne({ ownerId: id }).select("_id");
    await User.findByIdAndUpdate({ _id: id }, { businessId });
    return NextResponse.json({
      success: true,
      message: `Business Info Uploaded`,
      businessId: businessId._id,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "server error",
    });
  }
}
