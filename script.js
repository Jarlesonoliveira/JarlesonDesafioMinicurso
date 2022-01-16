const imagemA = document.querySelector('#imagem1');
const nomeDoPersonagemA = document.querySelector('#nomeA');
const especieA = document.querySelector('#especieA');
const condicaoA = document.querySelector('#statusA');
const imagemB = document.querySelector('#imagem2');
const nomeDoPersonagemB = document.querySelector('#nomeB');
const especieB = document.querySelector('#especieB');
const condicaoB = document.querySelector('#statusB');
const botao = document.querySelector('button');


gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio1 = gerarValorAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio1}`, {
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
    });

    let numeroAleatorio2 = gerarValorAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio2}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'application/json'
        }

    }).then((response) => response.json()).then((data) => {
        imagemB.src = data.image;
        imagemB.alt = data.name;
        nomeDoPersonagemB.innerHTML = data.name;
        especieB.innerHTML = data.species;
        condicaoB.innerHTML = data.status;
    });

}

botao.onclick = pegarPersonagem;