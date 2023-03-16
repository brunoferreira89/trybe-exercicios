const newEmployees = () => {
  const employees = {
    id1: generateObj('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateObj('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateObj('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const generateEmail = (nome) => {
  const splitName = nome.toLowerCase().replace(' ', '_');
  return `${splitName}@trybe.com`;
}

const generateObj = (nome) => {
  const obj = { nome: nome, email: generateEmail(nome) }
  return obj;
};

console.log(newEmployees());