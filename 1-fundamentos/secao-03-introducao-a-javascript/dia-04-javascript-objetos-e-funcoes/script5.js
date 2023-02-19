// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const n1 = 34;
const n2 = 19;

function maiorEntreDois(n1, n2) {
    if (n1 > n2) {
        return n1 + ' é maior do que ' + n2;
    } else if (n2 > n1) {
        return n2 + ' é maior do que ' + n1;
    } else {
        return 'Os números são iguais';
    }
}

console.log(maiorEntreDois(n1, n2));