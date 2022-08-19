import data from './data/lol/lol.js';

// console.log(data);

// console.log(data.data.Aatrox);

const champName = Object.keys(data.data);
console.log(champName);


document.getElementById("champSection").innerHTML=champName.map(name=>`<img src="${data.data[name].img}">`)















// ------------------------

// const idDaTagClicada = document.getElementById("search-for");

// function escolherOpcao() {
// const pesquisar = document.getElementById("search-for");
// const valorDaOpcao = pesquisar.options[pesquisar.selectedIndex].value;

// return console.log(valorDaOpcao);
// }

// idDaTagClicada.addEventListener("click", escolherOpcao);

// ------------------------