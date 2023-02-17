let pessoaEstudante = {};

const nome = 'Bruno';
const sobrenome = 'Ferreira';
const email = 'bruno.ferreira89@hotmail.com';
const telefone = '21985873655';
const github = 'https://github.com/brunoferreira89';
const linkedin = 'https://www.linkedin.com/in/brunocmferreira/';

pessoaEstudante.Nome = nome;
// console.log(pessoaEstudante);

pessoaEstudante.Sobrenome = sobrenome;
// console.log(pessoaEstudante);

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor;
}

adicionaPropriedade(pessoaEstudante, 'Email', email);
// console.log(pessoaEstudante);

adicionaPropriedade(pessoaEstudante, 'Telefone', telefone);
// console.log(pessoaEstudante);

adicionaPropriedade(pessoaEstudante, 'Github', github);
// console.log(pessoaEstudante);

adicionaPropriedade(pessoaEstudante, 'LinkedIn', linkedin);
// console.log(pessoaEstudante);

console.log(Object.keys(pessoaEstudante));