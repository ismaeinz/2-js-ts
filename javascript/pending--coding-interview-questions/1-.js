// 1
// find missing Number
[1, 10, 2].sort(); //=> [1,10,2]

//
const arr = [3, 1, 0, 6, 3]; //0,1,3,3,6
function findMissingNums_1(arr) {
  let missingNums = []; // pushing missing number
  arr.sort((a, b) => a - b);

  for (let x = 0; x < arr.length; x++) {
    let subTractResult = arr[x + 1] - arr[x];
    if (subTractResult > 1) {
      for (let y = 1; y < subTractResult; y++) {
        missingNums.push(arr[x] + y);
      }
    }
  }
  console.log(missingNums);
  return missingNums;
}
findMissingNums_1(arr);

// 2
function findMissingNums_2(arr) {
  let missingNumber = [];
  arr.sort((a, b) => a - b);
  for (let x = arr[0]; x <= arr[arr.length - 1]; x++) {
    if (!arr.find((num) => num === x)) {
      missingNumber.push(x);
    }
  }
  console.log(missingNumber);
  return missingNumber;
}
// findMissingNums_2(arr);
