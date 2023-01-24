let salario = 4800;

let salarioComDescontoInss;

if (salario <= 1556.94) {
    salarioComDescontoInss = salario - (salario * 0.08);
} else if (salario > 1556.94 && salario <= 2594.92) {
    salarioComDescontoInss = salario - (salario * 0.09);
} else if (salario > 2594.92 && salario <= 5189.82) {
    salarioComDescontoInss = salario - (salario * 0.11);
} else {
    salarioComDescontoInss = salario - 570.88;
}

console.log(salarioComDescontoInss);

let salarioComDescontoIR;

if (salarioComDescontoInss <= 1903.98) {
    salarioComDescontoIR = salarioComDescontoInss;
} else if (salarioComDescontoInss > 1903.98 && salarioComDescontoInss <= 2826.65) {
    salarioComDescontoIR = salarioComDescontoInss - (salarioComDescontoInss * 0.075) + 142.80;
} else if (salarioComDescontoInss > 2826.65 && salarioComDescontoInss <= 3751.05) {
    salarioComDescontoIR = salarioComDescontoInss - (salarioComDescontoInss * 0.15) + 354.80;
} else if (salarioComDescontoInss > 3751.05 && salarioComDescontoInss <= 4664.68) {
    salarioComDescontoIR = salarioComDescontoInss - (salarioComDescontoInss * 0.225) + 636,13;
} else if (salarioComDescontoInss > 4664.68) {
    salarioComDescontoIR = salarioComDescontoInss - (salarioComDescontoInss * 0.275) + 869,36;
}

console.log(salarioComDescontoIR);