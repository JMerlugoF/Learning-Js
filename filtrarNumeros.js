const squareList = (arr) => {
  // Only change code below this line
  let newArr = [];
  const filtered = arr.filter((num) => num >= 0 && Number.isInteger(num));

  console.log(filtered);

  const squared = filtered.map((x) => x ** 2);

  console.log(squared);

  newArr = squared.reduce((acc, x) => [...acc, x], []);

  console.log(newArr);

  return newArr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
