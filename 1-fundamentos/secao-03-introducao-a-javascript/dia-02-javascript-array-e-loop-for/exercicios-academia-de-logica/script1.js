// Descubra a idade mínima

// 1 - Atribuindo nomes a variáveis:

let nome1 = 'Marina';
let nome2 = 'Silvia';
let nome3 = 'Iza';

// 2 - Atribuindo idades a variáveis:

let idade1 = 37;
let idade2 = 48;
let idade3 = 25;

// 3 - Desenvolvendo o código:

if (idade1 < idade2 && idade1 < idade3) {
    console.log(nome1 + ' é a pessoa mais jovem e possui ' + idade1 + ' anos de idade.');
} else if (idade2 < idade1 && idade2 < idade3) {
    console.log(nome2 + ' é a pessoa mais jovem e possui ' + idade2 + ' anos de idade.');
} else {
    console.log(nome3 + ' é a pessoa mais jovem e possui ' + idade3 + ' anos de idade.');
}