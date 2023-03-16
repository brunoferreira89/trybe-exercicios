// const productObj = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const { name, price, seller } = productObj;
// console.log(name);
// console.log(price);
// console.log(seller);

const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

const { description: { specieName: specie } } = character;
console.log(`${specie}`);