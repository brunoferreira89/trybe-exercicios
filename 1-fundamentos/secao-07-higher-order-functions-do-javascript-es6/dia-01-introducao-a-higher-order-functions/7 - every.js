// Imagine que você pegou um boletim escolar antigo e quer verificar se passou em todas as matérias. Como você faria? Ao utilizar a função every, você consegue resolver esse problema. Caso tenha passado em todas as matérias, o retorno será true; caso contrário, será false.

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verificaGrades = (object) => Object.values(object).every((elemento) => elemento === 'Aprovado');

console.log(verificaGrades(grades));