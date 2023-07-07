// Only change code below this line
function urlSlug(title) {
  const lowerCasedString = title.toLowerCase();
  const wordsSplited = lowerCasedString.split(" ");
  const filteredWord = wordsSplited.filter((word) => word !== "");
  const urlNoBar = filteredWord.join("-");

  return urlNoBar;
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));
