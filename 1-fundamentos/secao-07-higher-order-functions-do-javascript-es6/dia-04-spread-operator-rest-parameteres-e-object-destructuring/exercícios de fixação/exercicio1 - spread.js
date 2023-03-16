// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Maçã', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Creme de Leite', 'Açúcar'];

const fruitSalad = (fruit, additional) => {
  const newFruitSalad = [...fruit, ...additional];
  return newFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));