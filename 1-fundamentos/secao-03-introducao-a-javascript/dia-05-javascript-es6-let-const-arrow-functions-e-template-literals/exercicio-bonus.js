const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    let novaFrase = frase.split('');
    for (let index = 0; index < novaFrase.length; index += 1) {
        if (novaFrase[index] === 'x') {
            novaFrase[index] = nome;
        };
    };
    return novaFrase.join('');
};
// console.log(substituaX('Bruno'));

const minhasSkills = (funcao) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let mensagem = 
    `${funcao}
    Minhas três habilidades são:`

    for (let index = 0; index < skills.length; index += 1) {
        mensagem = `${mensagem}
    - ${skills[index]}`;
    }
    return mensagem;
};
console.log(minhasSkills(substituaX('Bruno')));;