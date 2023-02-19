const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (objeto, propriedade, valor) => {
  return objeto[propriedade] = valor;
};
adicionaTurno(lesson2, 'turno', 'noite');
//   console.log(lesson2);

const listaKeys = (objeto) => {
  return console.log(Object.keys(objeto));
};
//   listaKeys(lesson2);

const mostraTamanhoObj = (objeto) => {
  const tamanhoObj = Object.keys(objeto);
  return console.log(tamanhoObj.length);
}
//   mostraTamanhoObj(lesson2);

const listaValores = (objeto) => {
  return console.log(Object.values(objeto));
}
//   listaValores(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const getNumberOfStudents = (objeto) => {
  let total = 0;
  const keys = Object.keys(objeto);
  for (let index = 0; index < keys.length; index += 1) {
    total += objeto[keys[index]].numeroEstudantes;
  }
  return total;
}
// console.log(getNumberOfStudents(allLessons));

const getKeyValuesByIndex = (objeto, index) => {
  const keys = Object.keys(objeto);
  return objeto[keys[index]];
}
// console.log(getKeyValuesByIndex(lesson1, 1));

const verifyPair = (objeto, chave, valor) => {
  const keys = Object.entries(objeto);
  console.log(keys);
}
console.log(verifyPair(lesson1));