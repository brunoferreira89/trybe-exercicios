const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (array1, array2) => {
  let nota = 0;
  array1.forEach((num1, index) => {    
    const num2 = array2[index];
    if (num1 === num2) { nota+= 1 };
    if (num1 !== num2 && num2 !== 'N.A') { nota -= 0.5 };    
  });
  return nota;
};

const evaluator = (rightAnswers, studentAnswers, callback) => {
  return callback (rightAnswers, studentAnswers);
};

console.log(evaluator(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));