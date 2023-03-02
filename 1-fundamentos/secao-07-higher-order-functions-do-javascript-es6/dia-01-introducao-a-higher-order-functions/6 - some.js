const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verificaPrimeiraLetra = (letra, array) => array.some((name) => name[0] === letra);

console.log(verificaPrimeiraLetra('B', listNames));