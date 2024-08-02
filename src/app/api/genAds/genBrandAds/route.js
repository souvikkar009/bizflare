import { genBrandAd } from "@/utils/templates";
import { NextResponse } from "next/server";
import connectDB from "@/helper/mongoDB";
import Business from "@/models/business";
import ImgSources from "@/data/ImgsOfBusinesses/ImgSourceData";
import { genBrandAdTexts } from "@/utils/genAdTexts";

export async function POST(request) {
  try {
    const { businessId } = await request.json();
    await connectDB();
    const { businessName, businessIndustry, businessDomain } =
      await Business.findById({ _id: businessId }).select(
        `businessName businessIndustry businessDomain`
      );
    // const text1 = `Yoga: More Than Just Exercise`;
    // const text2 = `Discover the transformative power of yoga. Connect with your breath, body, and mind in a supportive environment.`;
    // const img = await genBrandAd(selectedImg, text1, text2);
    // const img2 = await genBrandAd(selectedImg, text1, text2);
    // const finalImg = await addTextToImage(selectedImg, text1, text2);
    // return NextResponse.json({ image: img });
    console.log(businessName, businessDomain, businessIndustry);
    const imgs = await ImgSources[businessDomain].map((source) => source);
    const txtResponse = await genBrandAdTexts(businessName, businessDomain);
    const adTexts = await JSON.parse(txtResponse);

    const finalImgs = [];

    for (let i = 0; i < imgs.length; i++) {
      finalImgs.push(
        await genBrandAd(
          businessName,
          imgs[i].img_src,
          adTexts[i].title,
          adTexts[i].description
        )
      );
      // finalImgs.push(
      //   await genBrandAd(
      //     businessName,
      //     imgs[i].img_src,
      //     `Unwind & Recharge with Yoga Lmao noob`,
      //     `Find your inner peace and boost your energy with our relaxing yoga classes. All levels welcome! relaxing yoga classes. All levels welcome!`
      //   )
      // );
    }
    return NextResponse.json(finalImgs);
  } catch (error) {
    console.log(error);
  }
}
