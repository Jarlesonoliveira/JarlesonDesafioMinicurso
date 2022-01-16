const imagemA = document.querySelector('#imagem1');
const nomeDoPersonagemA = document.querySelector('#nomeA');
const especieA = document.querySelector('#especieA');
const condicaoA = document.querySelector('#statusA');
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

}

botao.onclick = pegarPersonagem;