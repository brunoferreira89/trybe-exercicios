// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const n1 = 91;
const n2 = 95;
const n3 = 85;

function maiorEntreTres(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1 + ' é maior do que ' + n2 + ' e ' + n3;
    } else if (n2 > n1 && n2 && n3) {
        return n2 + ' é maior do que ' + n1 + ' e ' + n3;
    } else {
        return n3 + ' é maior do que ' + n1 + ' e ' + n2;
    }
}
console.log(maiorEntreTres(n1, n2, n3));