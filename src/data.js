//exportando nossa constante com todas as funções de filtro
export {dataLoL};

//const com todos os filtros em forma de objeto.
const dataLoL = {

  //Função de filtro por tipo de campeão
  filtrarporTipo: function (todosOsDados, tags) {
    const filtro = todosOsDados.filter(function(champ){
      const filtroResultado = champ[tags].toLowerCase() === tags.toLowerCase();
      return filtroResultado;
    
    });
    return filtro

  }


}



// const rickAndMorty = {

//   // ===== Função de filtro por status ====
//   filtrarPorStatus: function (list, status) {
//       const filtro = list.filter(function(personagem) {        
//           const statusFiltrado = personagem.status.toLowerCase() === status;         
//           return statusFiltrado; 

//       });             

//       return filtro;  
//   },
// };