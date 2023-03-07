const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const countA = (array) => {
  let counter = 0;
  const arrayOfLetters = array.map((element) => element.split(' '))
    .reduce((acc, curr) => (acc + curr));
  const newSplit = arrayOfLetters.split('');
  newSplit.map((element) => {
    if (element === 'A' || element === 'a') {
      counter += 1;
    }    
  });
  return counter;
};
console.log(countA(names));
