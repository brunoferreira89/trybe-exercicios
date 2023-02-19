const techList = (array, nome) => {
  let sortedArray = array.sort();
  let newObject = {};
  let newArray = [];
  for (let index = 0; index < sortedArray.length; index += 1) {
    newObject.tech = sortedArray[index];
    newObject.name = nome;
    newArray.push(newObject);
  }
  return newObject;
}

// let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
// let sortedArray = array.sort();
// console.log(sortedArray);

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = { techList };