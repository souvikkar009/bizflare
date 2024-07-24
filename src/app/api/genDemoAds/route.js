import ImgSources from "@/data/ImgsOfBusinesses/ImgSourceData";
import { genAdTexts } from "@/utils/genAdTexts";
import { genBrandAd, genNewProductAd } from "@/utils/templates";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { businessName, generalBType, specificBType } = await request.json();
  const imgs = await ImgSources[specificBType].map((source) => source);
  const txtResponse = await genAdTexts(specificBType);
  const adTexts = await JSON.parse(txtResponse);

  const finalImgs = [];

  for (let i = 0; i < imgs.length; i++) {
    finalImgs.push(
      await genBrandAd(
        imgs[i].img_src,
        adTexts[i].title,
        adTexts[i].description
      )
    );
    // finalImgs.push(
    //   await addTextToImage(
    //     `https://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-PNG-Free-Download.png`,
    //     `Unwind & Recharge with Yoga`,
    //     `Find your inner peace and boost your energy with our relaxing yoga classes. All levels welcome!`
    //   )
    // );
  }
  return NextResponse.json({ finalImgs });
}
