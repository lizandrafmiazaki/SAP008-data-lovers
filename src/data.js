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

