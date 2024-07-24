import geminiModel from "@/helper/GeminiModel";
import { NextResponse } from "next/server";

export async function GET() {
  // const reqBody = await request.json();
  let prompt = `
List 8 ad text which includes a title and a description part for a yoga center using this JSON schema:
{ "type": "array",
  "properties": {
    "title": { "type": "string" },
    "description": {"type": "string"},
  }
}`;
  let result = await geminiModel.generateContent(prompt);
  let texts = result.response.text();
  console.log(texts);
  return NextResponse.json({ texts });
}
