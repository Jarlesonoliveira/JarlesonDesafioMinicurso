const imagemA = document.querySelector('img');
const imagemB = document.querySelector('img');
const imagemC = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagemA = document.querySelector('#nome');
const nomeDoPersonagemB = document.querySelector('#nome');
const nomeDoPersonagemC = document.querySelector('#nome');
const especieA = document.querySelector('#especie');
const especieB = document.querySelector('#especie');
const especieC = document.querySelector('#especie');
const condicaoA = document.querySelector('#status');
const condicaoB = document.querySelector('#status');
const condicaoC = document.querySelector('#status');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'application/json'
        }

    }).then((response) => response.json()).then((data) => {
        imagemA.src = data.image;
        imagemA.alt = data.name;
        nomeDoPersonagemA.innerHTML = data.name;
        especieA.innerHTML = data.species;
        condicaoA.innerHTML = data.status;
    })
    
    .then((response) => response.json()).then((data) => {
        imagemB.src = data.image;
        imagemB.alt = data.name;
        nomeDoPersonagemB.innerHTML = data.name;
        especieB.innerHTML = data.especie;
        condicaoB.innerHTML = data.status;

    })

    .then((response) => response.json()).then((data) => {
        imagemC.src = data.image;
        imagemC.alt = data.name;
        nomeDoPersonagemC.innerHTML = data.name;
        especieC.innerHTML = data.especie;
        condicaoC.innerHTML = data.status;
    }); 
}

botao.onclick = pegarPersonagem;

