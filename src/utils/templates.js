import genLineText from "@/utils/lineText";
import { createCanvas, loadImage, registerFont } from "canvas";
import fs from "fs";
import Jimp from "jimp";
registerFont("./fonts/Poppins-Bold.ttf", { family: "Poppins Bold" });
registerFont("./fonts/Poppins-Regular.ttf", { family: "Poppins" });

export const genProductAd = async (
  businessName,
  imgUrl,
  title,
  description,
  call_to_action
) => {
  const template = await Jimp.read(
    "./public/src-ad-templates/src-template-product.png"
  );
  const productImg = await Jimp.read(imgUrl);
  const templateW = template.getWidth();
  const templateH = template.getHeight();

  const productImgContainerW = Math.round(templateW * (4 / 5));
  const productImgContainerH = Math.round(templateH * (45 / 100));

  productImg.contain(productImgContainerW, productImgContainerH);

  const productImgX = templateW / 2 - productImgContainerW / 2; // centering the product image horizontally
  const productImgY =
    templateH - (productImgContainerH + templateH * (15 / 100)); // product image at a height of 10% from template base

  template.composite(productImg, productImgX, productImgY);
  await template.writeAsync("./temp/lol.jpg");

  const image = await loadImage(`./temp/lol.jpg`);

  let ImgW = image.width;
  let ImgH = image.height;
  const canvas = createCanvas(ImgH, ImgH);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, ImgW, ImgH);

  // title

  const titleFontSize = 54;
  const titleLinespace = titleFontSize + 10;
  const titleX = ImgW / 2;
  const titleY = ImgH * (7 / 100);

  ctx.font = `${titleFontSize}px "Poppins Bold"`;
  ctx.fillStyle = "#FFD800";
  ctx.textAlign = "center";
  ctx.lineWidth = 2;

  const [...titleLineTexts] = genLineText(title, 3);
  const noLineT = titleLineTexts.length;

  for (let i = 0; i < noLineT; i++) {
    ctx.fillText(titleLineTexts[i], titleX, titleY + (i + 1) * titleLinespace);
  }

  // description

  const descFontSize = 26;
  const descLineSpace = descFontSize + 8;

  const descX = ImgW / 2;
  const descY = titleY + noLineT * titleLinespace + ImgH * (3 / 100);

  ctx.font = `${descFontSize}px "Poppins"`;
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineWidth = 2;

  const [...descLineTexts] = genLineText(description, 8);
  const noLineD = descLineTexts.length;

  for (let i = 0; i < noLineD; i++) {
    ctx.fillText(descLineTexts[i], descX, descY + (i + 1) * descLineSpace);
  }

  // business name

  const businessNameFontSize = 36;
  const businessNameLineSpace = businessNameFontSize + 4;

  const businessNameX = 30;
  const businessNameY = 30 + businessNameLineSpace;

  ctx.font = `${businessNameFontSize}px "Poppins Bold"`;
  ctx.fillStyle = "white";
  ctx.textAlign = "start";
  ctx.lineWidth = 2;

  ctx.fillText(businessName, businessNameX, businessNameY);

  // call_to_action
  const callToActionFontSize = 48;
  const callToActionFontSpace = businessNameFontSize + 10;

  const callToActionFontX = ImgW / 2;
  const callToActionFontY = ImgH - callToActionFontSpace;

  ctx.font = `${callToActionFontSize}px "Poppins Bold"`;
  ctx.fillStyle = "#FFD800";
  ctx.textAlign = "center";
  ctx.lineWidth = 2;

  ctx.fillText(call_to_action, callToActionFontX, callToActionFontY);

  fs.unlinkSync("./temp/lol.jpg");

  return canvas.toDataURL();
};

export const genBrandAd = async (
  businessName,
  brandImg,
  title,
  description
) => {
  const template = await Jimp.read(
    "./public/src-ad-templates/src-template-brand.png"
  );
  const productImg = await Jimp.read(brandImg);
  const templateW = template.getWidth();
  const templateH = template.getHeight();

  const productImgContainerW = Math.round(templateW * (95 / 100));
  const productImgContainerH = Math.round(templateH * (1 / 2));

  productImg.contain(productImgContainerW, productImgContainerH);

  const productImgX = templateW / 2 - productImgContainerW / 2; // centering the product image horizontally
  const productImgY = templateH / 2 - productImgContainerH / 2;

  template.composite(productImg, productImgX, productImgY);
  await template.writeAsync("./temp/lol.jpg");

  const image = await loadImage(`./temp/lol.jpg`);

  let ImgW = image.width;
  let ImgH = image.height;
  const canvas = createCanvas(ImgW, ImgH);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, ImgW, ImgH);

  const titleFontSize = 54;
  const titleLinespace = titleFontSize + 10;
  const titleX = ImgW / 2;
  const titleY = ImgH * (7 / 100);

  ctx.font = `${titleFontSize}px "Poppins Bold"`;
  ctx.fillStyle = "#FFD800";
  ctx.textAlign = "center";
  ctx.lineWidth = 2;

  const [...titleLineTexts] = genLineText(title, 4);
  const noLineT = titleLineTexts.length;

  for (let i = 0; i < noLineT; i++) {
    ctx.fillText(titleLineTexts[i], titleX, titleY + (i + 1) * titleLinespace);
  }

  const descFontSize = 36;
  const descLineSpace = descFontSize + 10;

  const descX = ImgW / 2;
  const descY = ImgH - ImgH * (5 / 100);
  // titleY +
  // noLineT * titleLinespace +
  // ImgH * (8 / 100) +
  // productImg.getHeight();

  ctx.font = `${descFontSize}px "Poppins"`;
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineWidth = 2;

  const [...descLineTexts] = genLineText(description, 6);
  const noLineD = descLineTexts.length;

  for (let i = noLineD - 1; i >= 0; i--) {
    ctx.fillText(
      descLineTexts[i],
      descX,
      descY - (noLineD - i - 1) * descLineSpace
    );
  }

  // Business Name

  const businessNameFontSize = 36;
  const businessNameLineSpace = businessNameFontSize + 4;

  const businessNameX = 30;
  const businessNameY = 30 + businessNameLineSpace;

  ctx.font = `${businessNameFontSize}px "Poppins Bold"`;
  ctx.fillStyle = "white";
  ctx.textAlign = "start";
  ctx.lineWidth = 2;

  ctx.fillText(businessName, businessNameX, businessNameY);

  fs.unlinkSync("./temp/lol.jpg");

  return canvas.toDataURL();
};
