const hydrate = (string) => {
let word = string.replace(/\D/g, '').split('');
let counter = 0;
for (let index = 0; index < word.length; index += 1) {
  counter += Number(word[index]);
}
  if (counter === 1) {
    return `${counter} copo de água`;
  } else {
    return `${counter} copos de água`;
  }
};
console.log(hydrate('2 cervejas'));

module.exports = { hydrate };