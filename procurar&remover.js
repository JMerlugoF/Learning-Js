function destroyer(arr, ...args) {
  let argsArray = [...args];
  return arr.filter(function (element) {
    return !argsArray.includes(element);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
