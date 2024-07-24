const genLineText = (text, noWordsPerLine) => {
  const words = text.trim().split(" ");
  const wordCount = words.length;
  const numLines = Math.ceil(wordCount / noWordsPerLine);
  let wordIndexes = [0];
  for (let i = 1; i < numLines; i++) {
    wordIndexes.push(i * noWordsPerLine);
  }
  wordIndexes.push(wordCount);
  let lineTexts = [];
  for (let i = 0; i < numLines; i++) {
    lineTexts.push(words.slice(wordIndexes[i], wordIndexes[i + 1]).join(" "));
  }
  return lineTexts;
};
export default genLineText;