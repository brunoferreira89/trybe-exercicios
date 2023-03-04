
const pessoas = ['Joicy', 'Flávio', 'Noel', 'Nasc', 'Carolzita', 'Thayná', 'Thalles', 'Rafa', 'Luc'];

const objPessoas = pessoas.map((element) => {
  const registro = {};
  registro.nome = element;
  registro.empresa = 'Trybe';
  return registro;
});
console.log(objPessoas);