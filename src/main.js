// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

// ------------------------

const idDaTagClicada = document.getElementById("search-for");

function escolherOpcao() {
const pesquisar = document.getElementById("search-for");
const valorDaOpcao = pesquisar.options[pesquisar.selectedIndex].value;

return console.log(valorDaOpcao);
}

idDaTagClicada.addEventListener("click", escolherOpcao);