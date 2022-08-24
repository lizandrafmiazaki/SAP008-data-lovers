import data from './data/lol/lol.js';

//---------------------------------------------------[início] Testando chamada do data.js

//=> Criei uma constante para salvar todas as chaves do documento data.js:
const todasAsChaves = Object.keys(data.data);

//=> Peguei a div de saída
const minhaDiv = document.getElementById("section-change");

//=>Criei uma const pra salvar os names:
const listaComNames = todasAsChaves.map(chaves => data.data[chaves].name);

//=> Escrevendo a lista no html:
minhaDiv.innerHTML = listaComNames;


//----------------------------------------------------[Fim] Testando chamada do data.js

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
