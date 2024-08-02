import geminiModel from "@/helper/GeminiModel";
import { genProductAdTexts } from "@/utils/genAdTexts";
import { NextResponse } from "next/server";

export async function GET() {
  let result = await genProductAdTexts("Smart Watch");
  console.log(result);
  return NextResponse.json({ result });
}
