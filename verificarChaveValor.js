function whatIsInAName(collection, source) {
  return collection.filter(function (obj) {
    return Object.entries(source).every(function ([key, value]) {
      return obj.hasOwnProperty(key) && obj[key] === value;
    });
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
