// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

menor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menor) {
        menor = numbers[index];
    }
}

console.log(menor);