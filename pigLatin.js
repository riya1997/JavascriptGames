const args = process.argv.slice(2);
console.log(args);
const wordsList = args[0].split(" ");

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let finalstring = "";
for (let i = 0; i < wordsList.length; i++) {
  let tempWord = "";
  if (!vowels.includes(wordsList[i][0]) && vowels.includes(wordsList[i][1])) {
    tempWord = wordsList[i].slice(1) + wordsList[i][0] + "ay";
  } else if (
    !vowels.includes(wordsList[i][0]) &&
    !vowels.includes(wordsList[i][1])
  ) {
    tempWord = wordsList[i].slice(2) + wordsList[i].slice(0, 1) + "ay";
  } else if (vowels.includes(wordsList[i][0])) {
    tempWord = wordsList[i] + "way";
  }
  tempWord += " ";
  finalstring += tempWord;
}

console.log(finalstring);
