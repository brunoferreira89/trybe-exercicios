const valorCusto = -10;
const valorVenda = 80;

const qtd = 1000;

let valorCustoTotal = valorCusto * 1.2;

let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('Erro: valor de entrada inválido!')
} else {
    console.log(lucro * qtd);
}

