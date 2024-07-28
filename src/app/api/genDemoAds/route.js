import ImgSources from "@/data/ImgsOfBusinesses/ImgSourceData";
import { genAdTexts } from "@/utils/genAdTexts";
import { genBrandAd, genNewProductAd } from "@/utils/templates";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { businessName, generalBType, specificBType } = await request.json();
  const imgs = await ImgSources[specificBType].map((source) => source);
  const txtResponse = await genAdTexts(businessName, specificBType);
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
  return NextResponse.json({ finalImgs });
}
