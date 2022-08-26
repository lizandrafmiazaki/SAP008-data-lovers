//exportando nossa constante com todas as funções de filtro
export {dataLoL};

//const com todos os filtros em forma de objeto.
const dataLoL = {

  //Função de filtro por tipo de campeão
  filtrarporTipo: function (todosOsDados, tag) {
    const filtro = todosOsDados.filter(function(champ){
      const existeTag = champ.tags.filter((champTag) => champTag.toLowerCase() === tag.toLowerCase());
      return existeTag.length !== 0;
    
    });
    return filtro

  }


}

