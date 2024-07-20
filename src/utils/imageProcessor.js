// utils/imageProcessor.js
import { createCanvas, loadImage } from "canvas";

export const addTextToImage = async (imageUrl, text) => {
  const image = await loadImage(imageUrl);
  let sImgW = image.width;
  let sImgH = image.height;
  let dImgW = 640;
  let dImgH = 640;
  const canvas = createCanvas(dImgW, dImgH);
  const ctx = canvas.getContext("2d");

  let dx = 0;
  let dy = 0;

  const aspectRatio = Number(sImgW / sImgH);
  console.log(aspectRatio);

  if (aspectRatio == 1) {
    dx = dy;
    dImgH = dImgW;
  } else if (aspectRatio > 1) {
    let ogH = dImgH;
    dImgH = Math.round(dImgH / aspectRatio);
    dy = Math.round((ogH - dImgH) / 2);
  } else {
    let ogW = dImgW;
    dImgW = Math.round(dImgH * aspectRatio);
    dx = Math.round((ogW - dImgW) / 2);
  }
  ctx.drawImage(image, 0, 0, sImgW, sImgH, dx, dy, dImgW, dImgH);

  ctx.font = "bold 40px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineWidth = 4;
  ctx.strokeStyle = "black";
  ctx.strokeText(text, dImgW / 2 + dx, dy + 40);
  ctx.fillText(text, dImgW / 2 + dx, dy + 40);

  return canvas.toDataURL();
};
