function splitify(str) {
  // Only change code below this line
  const cleanedStr = str.replace(/[^\w\s]/g, " ");
  const words = cleanedStr.split(" ");
  return words;

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));
