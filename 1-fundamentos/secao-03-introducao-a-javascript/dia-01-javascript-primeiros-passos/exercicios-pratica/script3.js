let num1 = 50;
let num2 = 60;
let num3 = 15;

let maior;

if (num1 > num2 && num1 > num3) {
    maior = num1;
} else if (num2 > num1 && num2 > num3) {
    maior = num2;
} else {
    maior = num3;
}

console.log(maior);