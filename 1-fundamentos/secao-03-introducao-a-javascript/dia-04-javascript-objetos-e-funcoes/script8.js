// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const ang1 = 61;
const ang2 = 30;
const ang3 = 90;

function isItATriangle(ang1, ang2, ang3) {
    if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
        return 'Erro: ângulo inválido'    
    } else if (ang1 + ang2 + ang3 !== 180) {
        return false;
    } else {
        return true;    
    }
}

console.log(isItATriangle(ang1, ang2, ang3));

