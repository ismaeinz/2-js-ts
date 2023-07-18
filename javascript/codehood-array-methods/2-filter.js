// 2 => filter()
const arr = [1, 2, 3];
const result = arr.filter((element, index, array) => {
  return element < 2;
});
console.log(result);
