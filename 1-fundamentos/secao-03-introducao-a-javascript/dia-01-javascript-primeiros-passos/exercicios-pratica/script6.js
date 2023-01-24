let peca = 'peão';

switch (peca.toLowerCase()) {
    case 'rei':
        console.log('Qualquer direção, mas apenas 1 casa por vez.');
        break;
    case 'dama':
        console.log('Qualquer direção, mas quantas casas quiser, desde que livres.');
        break;    
    case 'torre':
        console.log('Em linha reta horizontal ou vertical, desde que por casas não ocupadas.');
        break;
    case 'peão':
        console.log('Uma casa por vez, para frente.');
        break;
    case 'bispo':
        console.log('Em linha reta diagonal.');
        break;
    case 'cavalo':
        console.log('Movimento em L.');
        break;
}

