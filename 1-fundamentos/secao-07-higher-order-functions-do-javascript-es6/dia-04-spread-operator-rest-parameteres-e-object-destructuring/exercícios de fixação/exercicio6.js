const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const newObject = {
  ...user,
  ...jobInfos,
};

// console.log(newObject);

const { name, age, nationality, profession, squad, squadInitials } = newObject;

const phrase = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

console.log(phrase);