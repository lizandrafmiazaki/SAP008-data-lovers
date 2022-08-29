import data from "./data/lol/lol.js";
import { computeStats, filtrarDados, ordenarDados } from "./data.js";

const todosDados = Object.values(data.data);
const formPesquisar = document.querySelector("#search-form");
const pFilterCalculation = document.querySelector("#filter-calculation");

// CRIANDO A FUNÇÃO QUE CRIA OS CARDS:
function criaCard(champs) {
  return champs
    .map(
      (champ) =>
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
                    <li>Tipo: ${champ.tags.join(", ")}</li>
                </ul>
            </div>
        `
    )
    .join("");
}

function mostrarCards(champs) {
  const template = criaCard(champs);
  document.getElementById("section-change").innerHTML = template;
}

// Declarando função de mudança de opção:
function pesquisarSubmitForm(event) {
  event.preventDefault();

  const tipo = event.target[0].value;
  const selectOrdenar = event.target[1];
  const valorOrdem = selectOrdenar.value;
  const indiceSelcioando = selectOrdenar.selectedIndex;
  const ordem = selectOrdenar[indiceSelcioando].parentElement.label;

  const dadosFiltrados = filtrarDados(todosDados, tipo, ordem, valorOrdem);
  const percentualFiltro = computeStats(dadosFiltrados, todosDados).percentual;
  pFilterCalculation.innerHTML = `Sua pesquisa corresponde à ${percentualFiltro} % do total de Campeões`;
  mostrarCards(ordenarDados(dadosFiltrados, ordem, valorOrdem));
}

mostrarCards(todosDados);
formPesquisar.addEventListener("submit", pesquisarSubmitForm);
