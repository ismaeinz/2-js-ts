// pyramids
// بتاخد رقم وبتعمله علي هيئة مثلث
function pyramid(n) {
  const midPoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (col + row >= midPoint && col - row <= midPoint) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}
pyramid(5);
