import geminiModel from "@/helper/GeminiModel";

export const genAdTexts = async (businessName, specificBType) => {
  let prompt = `
  List 4 catchy ad texts which includes a title and a description part for a ${specificBType} business. The Business House Name is ${businessName}. Use this JSON schema:
    { "type": "array",
      "properties": {
      "title": { "type": "string" },
      "description": {"type": "string"},
    }
  }`;
  let result = await geminiModel.generateContent(prompt);
  return result.response.text();
};
