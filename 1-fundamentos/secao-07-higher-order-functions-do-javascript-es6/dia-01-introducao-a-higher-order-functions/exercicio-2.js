// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const verifyNumber = (apostado, sorteado) => apostado === sorteado;

const sorteio = (apostado, callback) => {
  const sorteado = Math.floor((Math.random() * 5) + 1);

  console.log(`Número apostado: ${apostado}`);
  console.log(`Número sorteado: ${sorteado}`);
  return callback(apostado, sorteado) ? 'Parabéns, você ganhou!' : 'Que pena, fica pra próxima...';
  
}
console.log(sorteio(3, verifyNumber));