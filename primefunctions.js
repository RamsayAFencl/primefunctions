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

console.log(primeGen(10));
