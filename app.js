//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Hora do desafio";

//let paragrafo = document.querySelector ("p");
//paragrafo.innerHTML= "Escolha um número entre 1 e 10";

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela ("h1", "Hora do desafio");
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    console.log("Cite uma cidade brasileira");
    }