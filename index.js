// declare sentence
let sentence = (snt) => {
  //get length of sentence
  const lengthCount = snt.length;
  //length of words
  const wordsCount = snt.split(" ").length;
  //get number of vowels in sentence
  const vowelCount = snt.match([aeiouAEIOU]).length;

  return "the length of the sentence is ${lengthCount} character long, with ${wordsCount} words, and ${vowelCount} vowels.";
};

console.log(snt);
