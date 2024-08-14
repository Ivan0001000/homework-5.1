let stratValue = 20;
let endValue = 30;
let step = 0.5;
let resultStr = " ";

for (i = stratValue; i <= endValue; i += step) {
  if (i === endValue) {
    resultStr += i + ". ";
  } else {
    resultStr += i + ", ";
  }
}
console.log(resultStr);
