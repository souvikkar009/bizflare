import { genProductAd } from "@/utils/templates";
import { NextResponse } from "next/server";
import connectDB from "@/helper/mongoDB";
import Business from "@/models/business";
import { genProductAdTexts } from "@/utils/genAdTexts";
import { productImgs } from "@/data/ImgsOfBusinesses/productImgs";

export async function POST(request) {
  try {
    const { businessId, productName } = await request.json();
    await connectDB();
    const { businessName } = await Business.findById({
      _id: businessId,
    }).select(`businessName`);
    // const text1 = `Yoga: More Than Just Exercise`;
    // const text2 = `Discover the transformative power of yoga. Connect with your breath, body, and mind in a supportive environment.`;
    // const img = await genBrandAd(selectedImg, text1, text2);
    // const img2 = await genBrandAd(selectedImg, text1, text2);
    // const finalImg = await addTextToImage(selectedImg, text1, text2);
    // return NextResponse.json({ image: img });
    console.log(businessName, productName);
    const imgs = await productImgs[productName].map((source) => source);
    const txtResponse = await genProductAdTexts(productName);
    const adTexts = await JSON.parse(txtResponse);

    const finalImgs = [];

    for (let i = 0; i < imgs.length; i++) {
      finalImgs.push(
        await genProductAd(
          businessName,
          imgs[i].img_src,
          adTexts[i].title,
          adTexts[i].description,
          adTexts[i].call_to_action
        )
      );
      // finalImgs.push(
      //   await genProductAd(
      //     businessName,
      //     imgs[i].img_src,
      //     "Unwind & Recharge with Yoga Lmao noob",
      //     "Find your inner peace and boost your energy with our relaxing yoga classes. All levels welcome! relaxing yoga classes. All levels welcome!",
      //     "Grab now"
      //   )
      // );
    }
    return NextResponse.json(finalImgs);
  } catch (error) {
    console.log(error);
  }
}
