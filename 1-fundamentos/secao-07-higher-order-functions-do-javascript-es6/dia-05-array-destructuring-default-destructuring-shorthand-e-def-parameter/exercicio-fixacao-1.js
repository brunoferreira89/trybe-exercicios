const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

const [primeNumber1, primeNumber2, primeNumber3] = primeNumbers;

sum(primeNumber1, primeNumber3);