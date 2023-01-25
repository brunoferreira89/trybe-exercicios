// Taxa metabólica basal

// 1 - Atribuir valores a cada variável de idade, sexo, peso e altura:

let age = 20;
let sex = 'M' // Podendo ser F
let weight = 75; // em kg
let height = 180; // em centímetros

// 2 - Criar uma variável para receber o valor do cálculo da fórmula dada:

let calculoM = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;

let calculoF = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;

// 3 - Desenvolver o código:

if ((sex != 'M' && sex != 'F') || (age < 0 || weight < 0 || height < 0)) {
    console.log('Erro: entrada de dados inválida.');
} else if (sex == 'M') {
    console.log('A taxa metabólica basal é: ' + calculoM + ' Kcal');
} else {
    console.log('A taxa metabólica basal é: ' + calculoF + ' Kcal');
}