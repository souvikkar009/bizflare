import { genBrandAd } from "@/utils/templates";
import { addTextToImage } from "../../../utils/imageProcessor";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { selectedImg } = await request.json();
    const text1 = `Yoga: More Than Just Exercise`;
    const text2 = `Discover the transformative power of yoga. Connect with your breath, body, and mind in a supportive environment.`;
    const img = await genBrandAd(selectedImg, text1, text2);
    // const finalImg = await addTextToImage(selectedImg, text1, text2);
    return NextResponse.json({ image: img });
  } catch (error) {
    console.log(error);
  }
}
