const myFizzBuzz = require('./script');

test('Verifica se o parâmetro 15 retorna a string "fizzbuzz"', () => {
   expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('Verifica se o parâmetro 6 retorna a string "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
});

test('Verifica se o parâmetro 10 retorna a string "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
});

test('Verifica se o parâmetro 7 retorna ele mesmo', () => {
    expect(myFizzBuzz(7)).toBe(7);
});

test('Verifica se o parâmetro string "a" retorna "false"', () => {
    expect(myFizzBuzz('a')).toBe(false);
});