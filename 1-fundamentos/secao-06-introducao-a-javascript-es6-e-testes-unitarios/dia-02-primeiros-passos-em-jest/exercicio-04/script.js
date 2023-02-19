const techList = (array, nome) => {
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    let sortedArray = array.sort();
    let newArray = [];
    for (let index = 0; index < sortedArray.length; index += 1) {
      let newObject = {};
      newObject.tech = sortedArray[index];
      newObject.name = nome;
      newArray.push(newObject);
    }
    return newArray;
  }
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = { techList };