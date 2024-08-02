import geminiModel from "@/helper/GeminiModel";

export const genBrandAdTexts = async (businessName, specificBType) => {
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
export const genProductAdTexts = async (productName) => {
  let prompt = `
  Generate 2 ad copy text for a product. The product is ${productName}. Understand the product and use this JSON schema:
    { "type": "array",
      "properties": {
      "title": { "type": "string" },
      "description": {"type": "string"},
      "call_to_action": {"type": "string"}
    }
  }`;
  let result = await geminiModel.generateContent(prompt);
  return result.response.text();
};
