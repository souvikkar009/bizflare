import geminiModel from "@/helper/GeminiModel";

export const genAdTexts = async (specificBType) => {
  let prompt = `
  List 4 catchy ad texts which includes a title and a description part for a ${specificBType} business using this JSON schema:
    { "type": "array",
      "properties": {
      "title": { "type": "string" },
      "description": {"type": "string"},
    }
  }`;
  let result = await geminiModel.generateContent(prompt);
  return result.response.text();
};
