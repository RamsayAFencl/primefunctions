/*
Ramsay Fencl
Fundamentals HW 4
 */
function primeGen(num) {
  const inList = [];
  const prime = [];
  for (let i = 2; i <= num; ++i) {
    if (!inList[i]) {
      prime.push(i);
      for (let j = i * 2; j <= num; j += i) {
        inList[j] = true;
      }
    }
  }
  return prime;
}

function cumulativeSum(arr){
  let sum = 0;
  const ret = [];
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    sum += a;
    ret.push(sum);
  }
  return ret;
}

console.log(primeGen(10));
console.log(cumulativeSum([1, 2, 3, 4, 5, 6]));
