// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impares = impares + 1;
    }
}

if (impares === 0 ) {
    console.log('nenhum valor ímpar encontrado')
} else {
    console.log(impares + ' números ímpares');
}