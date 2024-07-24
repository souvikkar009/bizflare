import { createCanvas, loadImage, registerFont } from "canvas";
import genLineText from "./lineText";
registerFont("./fonts/Poppins-Regular.ttf", { family: "Poppins" });

export const addTextToImage = async (imageUrl, text1, text2) => {
  // const image = await loadImage(imageUrl);
  // const image = await loadImage(`https://www.pngall.com/wp-content/uploads/2/Split-Air-Conditioner-PNG-Free-Download.png`);

  let sImgW = image.width;
  let sImgH = image.height;
  let dImgW = 640;
  let dImgH = 640;
  const canvas = createCanvas(dImgW, dImgH);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(0, 0, dImgW, dImgH);

  let dx = 0;
  let dy = 0;

  const aspectRatio = Number(sImgW / sImgH);

  if (aspectRatio === 1) {
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

  ctx.font = `24px "Poppins"`;
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineWidth = 2;
  ctx.strokeText(text1, dImgW / 2 + dx, dImgH / 2 + dy + 26);
  ctx.fillText(text1, dImgW / 2 + dx, dImgH / 2 + dy + 26);

  ctx.font = `18px "Poppins"`;
  ctx.lineWidth = 4;
  const [...lineTexts] = genLineText(text2, 8);
  const noLine = lineTexts.length;
  let linespace = 26;
  for (let i = noLine; i > 0; i--) {
    ctx.strokeText(
      lineTexts[i - 1],
      dImgW / 2 + dx,
      dImgH + dy - linespace * (noLine - i + 1)
    );
    ctx.fillText(
      lineTexts[i - 1],
      dImgW / 2 + dx,
      dImgH + dy - linespace * (noLine - i + 1)
    );
  }

  return canvas.toDataURL();
};
