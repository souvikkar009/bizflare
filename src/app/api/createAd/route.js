import { genBrandAd, genProductAd } from "@/utils/templates";
// import { addTextToImage } from "../../../utils/imageProcessor";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { selectedImg } = await request.json();
    const titile = `Upgrade Your Wrist, Upgrade Your Life.`;
    const description = `Discover the transformative power of yoga. Connect with your breath, body, and mind in a supportive environment.`;
    const call = "Discover More";
    // const img = await genBrandAd(selectedImg, text1, text2);
    // const img2 = await genBrandAd(selectedImg, text1, text2);
    // const finalImg = await addTextToImage(selectedImg, text1, text2);

    const img = await genProductAd(
      selectedImg,
      titile,
      description,
      call,
      "Lmao Lol"
    );
    return NextResponse.json({ image: img });
  } catch (error) {
    console.log(error);
  }
}
