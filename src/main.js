import data from './data/lol/lol.js';
import { dataLoL } from './data.js';

//ARMAZENANDO TODOS OS DADOS EM UMA CONSTANTE:
const todosOsDados = Object.values(data.data);

console.log(todosOsDados);
console.log(Object.values(data.data));
console.log(todosOsDados.map(champ => champ.tags.map(tag => tag)).toString());

// document.getElementById("section-change").innerHTML = todosOsDados.map(imagem=>`<img src="${data.data[imagem].img}">`);

//CRIANDO A FUNÇÃO QUE PRINTA OS CARDS:
function criaCard(champs) {
    return champs.map((champ)=> 
        `
            <div class="cards">
                <div class="div-da-imagem">
                    <img class="imagem-do-card" src="${champ.splash}">
                    <p class="name-do-card">${champ.name}</p>
                </div>
                <ul class="info-do-card">
                    <li>${champ.title}</li>
                    <li>Ataque: ${champ.info["attack"]}</li>
                    <li>Defesa: ${champ.info["defense"]}</li>
                    <li>Magia: ${champ.info["magic"]}</li>
                    <li>Dificuldade: ${champ.info["difficulty"]}</li>
                    <li>Tipo: ${champ.tags}</li>
                </ul>
            </div>
        `
).join("")
}

//CHAMANDO A FUNÇÃO PARA CRIAR CARDS NA TELA:
mostracards(todosOsDados);

function mostracards(champs){
    const template = criaCard (champs);
    document.getElementById("section-change").innerHTML = template
}

//pegando o id do select
const selectTipo = document.querySelector("#search-by");
const saidaDeCards = document.querySelector ("#section-change");

// evento para filtrar por tipo
selectTipo.addEventListener("change", (event)=>{
    event.preventDefault();
    const valor = event.target.value;
    const resultadoFiltrado = dataLoL.filtrarporTipo(todosOsDados, valor);
    console.log(resultadoFiltrado);
    mostracards(resultadoFiltrado);
});

// saidaDeCards.innerHTML = criaCard(todosOsDados);


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
