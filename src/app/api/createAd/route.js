import { addTextToImage } from "@/utils/imageProcessor";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { selectedImg } = await request.json();
    console.log(selectedImg);
    const finalImg = await addTextToImage(selectedImg, `Hello, World`);
    return NextResponse.json({ image: finalImg });
  } catch (error) {
    console.log(error);
  }
}
