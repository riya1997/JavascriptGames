const args = process.argv.slice(2);
const wordsList = args[0].split(" ");
const shiftNumber = Number(args[1]);
let parseWord = "";
for (let i = 0; i < wordsList.length; i++) {
  let tempWord = "";
  for (let j = 0; j < wordsList[i].length; j++) {
    const isUpperCase = wordsList[i][j] === wordsList[i][j].toUpperCase();
    const base = isUpperCase ? 65 : 97;
    let charCode = wordsList[i][j].charCodeAt(0) - base;
    if ((isUpperCase && charCode > 90) || (!isUpperCase && charCode > 122))
      charCode -= 26;
    if ((isUpperCase && charCode < 65) || (!isUpperCase && charCode < 97))
      charCode += 26;
    let newCharCode = (charCode + shiftNumber) % 26;
    let newLetter = String.fromCharCode(newCharCode + base);

    tempWord += newLetter;
  }
  parseWord += tempWord + " ";
}
console.log(`Output: ${parseWord}`);
