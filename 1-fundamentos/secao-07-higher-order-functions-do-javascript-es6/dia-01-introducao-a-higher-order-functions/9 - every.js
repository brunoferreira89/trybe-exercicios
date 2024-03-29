// Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:

// Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;

// Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];



const verifyAges = (array, idade) => array.every((elemento) => elemento.age >= idade);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));