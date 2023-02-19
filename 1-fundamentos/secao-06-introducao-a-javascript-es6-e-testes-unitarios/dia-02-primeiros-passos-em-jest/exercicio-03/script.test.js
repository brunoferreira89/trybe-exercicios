const { mapString, encode, decode } = require('./script');

describe('1 - Verificar se são funções:', () => {

  test('Verifica se "mapString" é uma função', () => {
    expect(typeof mapString).toBe('function');
  });

  test('Verifica se "encode" é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  test('Verifica se "decode" é uma função', () => {
    expect(typeof decode).toBe('function');
  });

});

describe('2 - Função "encode":', () => {
  
  test('Verifica se a string "aeiou" retorna "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  })

  test('Verifica se outras letras não são convertidas', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
  });

  test('Verifica se o tamanho da string parâmetro e da string de retorno são iguais', () => {
    expect(encode('teste')).toHaveLength(5);
  });

});

describe('3 - Função "decode":', () => {
  
  test('Verifica se a string "12345" retorna "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  })

  test('Verifica se outros números não são convertidos', () => {
    expect(decode('6789')).toBe('6789');
  });

  test('Verifica se o tamanho da string parâmetro e da string de retorno são iguais', () => {
    expect(decode('12345')).toHaveLength(5);
  });
  
});

