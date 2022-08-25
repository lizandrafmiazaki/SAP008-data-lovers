import data from './data/lol/lol.js';
import { dataLoL } from './data.js';

//ARMAZENANDO TODOS OS DADOS EM UMA CONSTANTE:
const todosOsDados = Object.keys(data.data);
// console.log(todosOsDados);

// document.getElementById("section-change").innerHTML = todosOsDados.map(imagem=>`<img src="${data.data[imagem].img}">`);

//CRIANDO A FUNÇÃO QUE PRINTA OS CARDS:
function criaCard(todosOsDados) {
    document.getElementById("section-change").innerHTML = todosOsDados.map((champs)=> 
        `
            <div class="cards">
                <div class="div-da-imagem">
                    <img class="imagem-do-card" src="${data.data[champs].splash}">
                    <p class="name-do-card">${data.data[champs].name}</p>
                </div>
                <ul class="info-do-card">
                    <li>${data.data[champs].title}</li>
                    <li>Ataque: ${data.data[champs].info["attack"]}</li>
                    <li>Defesa: ${data.data[champs].info["defense"]}</li>
                    <li>Magia: ${data.data[champs].info["magic"]}</li>
                    <li>Dificuldade: ${data.data[champs].info["difficulty"]}</li>
                    <li>Tipo: ${data.data[champs].tags}</li>
                </ul>
            </div>
        `
).join("")
}

//CHAMANDO A FUNÇÃO PARA CRIAR CARDS NA TELA:
criaCard(todosOsDados);

//pegando o id do select
const selectTipo = document.querySelector("#search-by");
const saidaDeCards = document.querySelector ("#section-change")

// evento para filtrar por tipo
selectTipo.addEventListener("change", (event)=>{
    const valor = event.target.value;
    const resultadoFiltrado = dataLoL.filtrarporTipo(todosOsDados, valor);
    const mostraCards = criaCard(resultadoFiltrado);
    saidaDeCards.innerHTML = mostraCards;
    event.preventDefault();
});
// saidaDeCards.innerHTML = criaCard(todosOsDados);

// // ===== evento para filtrar por status ====
// selectStatus.addEventListener('change', (event) => {
//     const value = event.target.value;
//     const listaFiltrada = rickAndMorty.filtrarPorStatus(list, value);
//     const cards = displayCards(listaFiltrada);    
//     cardContainer.innerHTML = cards;  


// //---------------------------------------------------[início] Testando chamada do data.js
// //=> Criei uma constante para salvar todas as chaves do documento data.js:
// const todasAsChaves = Object.keys(data.data);

// //=> Peguei a div de saída
// const minhaDiv = document.getElementById("section-change");

// //=>Criei uma const pra salvar os names:
// const listaComNames = todasAsChaves.map(chaves => data.data[chaves].name);

// //=> Escrevendo a lista no html:
// minhaDiv.innerHTML = listaComNames;
// //----------------------------------------------------[Fim] Testando chamada do data.js

//----------------------------------------------------------------------------------------[INÍCIO] Monitorando select
//=> Declaração de variáveis úteis:
const btnPesquisar = document.getElementById("btn-search");

//=> Função para acompanhar mudanças no select ORDENAR POR
function capturaSelect(event){
    let selectParaAcompanhar = document.getElementById("order-by");
    let capturaTagDoSelectSelecionado = selectParaAcompanhar.options[selectParaAcompanhar.selectedIndex];
    //=> Sequencia de consoles para testar cada captura:
    // console.log(selectParaAcompanhar);
    // console.log(selectParaAcompanhar.options);
    // console.log(capturaTagDoSelectSelecionado);

    let valueOption = capturaTagDoSelectSelecionado.value;
    //=>(PODE PULAR) Opção de captura de texto usar linhas 17 e 18:
    // let textOption = capturaSelectSelecionado.text;
    // console.log(valueOption,textOption);

    //=> Capturando a tag html que é onde eu quero que saia as informações:
    let tagHtmlDeSaida = document.getElementById("paragrafoTeste");

    //=> Salvando em uma variável o que eu quero escrever no HTML:
    let minhaSaida = tagHtmlDeSaida.innerHTML = valueOption;

    //=> Comando padrão para não resetar a página após o evento:
    event.preventDefault();

    //=> Retorno da minha função:
    return minhaSaida;
}

//=> Acompanhamento do Evento Click
btnPesquisar.addEventListener("click", capturaSelect);

//----------------------------------------------------------------------------------------[FIM] Monitorando select
