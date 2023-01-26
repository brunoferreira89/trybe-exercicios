// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function numberCheck(n) {
    if (n > 0) {
        return n + ' is positive';
    } else if (n < 0) {
        return n + ' is negative';
    } else {
        return 'zero';
    }
}
console.log(numberCheck(0));