// import { checkGrau, filtrarDados, ordenarDados, computeStats } from "../src/data.js";
import { filtrarDados, ordenarDados, computeStats } from "../src/data.js";

const objetoTest = {
  champ1: {
    name: "Ahri",
    info: {
      difficulty: 7,
    },
    tags: ["Mage", "Assassin"],
  },

  champ2: {
    name: "Caitlyn",
    info: {
      difficulty: 4,
    },
    tags: ["Marksman"],
  },

  champ3: {
    name: "Morgana",
    info: {
      difficulty: 1,
    },
    tags: ["Mage", "Support"],
  },

  champ4: {
    name: "Sona",
    info: {
      difficulty: 3,
    },
    tags: ["Support", "Mage"],
  },

  champ5: {
    name: "Poppy",
    info: {
      difficulty: 5,
    },
    tags: ["Tank", "Fighter"],
  },

  champ6: {
    name: "Shen",
    info: {
      difficulty: 4,
    },
    tags: ["Tank", "Melee"],
  },
};

//testando se nosso objeto é um objeto mesmo! teste OK!
describe("objetoTest", () => {
  it("deve ser um objeto", () => {
    expect(typeof objetoTest).toBe("object");
  });
});

//TESTES DA FUNÇÃO 'filtrarDados' por TIPO >> OK
describe("filtrarDados", () => {
  it("é uma função", () => {
    expect(typeof filtrarDados).toBe("function");
  });

  it.each([
    ["Melee", 1, [objetoTest.champ6]],
    ["Marksman", 1, [objetoTest.champ2]],
    ["Assassin", 1, [objetoTest.champ1]],
    ["Mage", 3, [objetoTest.champ1, objetoTest.champ3, objetoTest.champ4]],
    ["Support", 2, [objetoTest.champ3, objetoTest.champ4]],
    ["Tank", 2, [objetoTest.champ5, objetoTest.champ6]],
    ["Fighter", 1, [objetoTest.champ5]]
  ])("Deve retornar os personagens corretos para o tipo %s", (tag,length,result)=>{
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = filtrarDados(resultado, tag);
    expect(dadosFiltrados.length).toEqual(length);
    expect(dadosFiltrados).toEqual(result);
  })

  it.each([
    ["Support", "dif-facil", 2, [objetoTest.champ3, objetoTest.champ4]]
    // ["Marksman", 1, [objetoTest.champ2]],
    // ["Assassin", 1, [objetoTest.champ1]],
    // ["Mage", 3, [objetoTest.champ1, objetoTest.champ3, objetoTest.champ4]],
    // ["Support", 2, [objetoTest.champ3, objetoTest.champ4]],
    // ["Tank", 2, [objetoTest.champ5, objetoTest.champ6]],
    // ["Fighter", 1, [objetoTest.champ5]]
  ])("Deve retornar os personagens corretos do TIPO %s para DIFICULDADE %s", (tag, nivelDificuldade, length,result)=>{
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = filtrarDados(resultado, tag, "Dificuldade", nivelDificuldade);
    expect(dadosFiltrados.length).toEqual(length);
    expect(dadosFiltrados).toEqual(result);
  })
});
//TESTES DA FUNÇÃO 'filtrarDados' por GRAU DE DIFICULDADE 
  // testando dificuldade fácil para SUPORTE! >> OK!
describe("filtrarDados", () => {
    it.skip('retorna "Morgana" e "Sona" para dificuldade "fácil"', () => {
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = filtrarDados(resultado, "Support", "Dificuldade", "dif-facil");
    expect(dadosFiltrados.length).toEqual(2);
    expect(dadosFiltrados[0].name).toBe("Morgana");
    expect(dadosFiltrados[1].name).toBe("Sona");
  });

  // testando dificuldade médio para MAGO! >> OK!
  it('retorna "Ahri" do tipo "Mage" para dificuldade "médio"', () => {
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = filtrarDados(resultado, "Mage", "Dificuldade", "dif-medio");
    expect(dadosFiltrados.length).toEqual(1);
    expect(dadosFiltrados[0].name).toBe("Ahri");
  });

  // testando dificuldade médio para ASSASSINO! >> OK!
  it('retorna "Ahri" do tipo "Assassin" para dificuldade "médio"', () => {
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = filtrarDados(resultado, "Assassin", "Dificuldade", "dif-medio");
    expect(dadosFiltrados.length).toEqual(1);
    expect(dadosFiltrados[0].name).toBe("Ahri");
  });

  // testando dificuldade médio para MARKSMAN! >> OK!!!
  it('retorna "Caitlyn" do tipo "Marksman" para dificuldade "médio"', () => {
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = filtrarDados(resultado, "Marksman", "Dificuldade", "dif-medio");
    expect(dadosFiltrados.length).toEqual(1);
    expect(dadosFiltrados[0].name).toBe("Caitlyn");
  });

  // testando dificuldade médio para TANK! >> OK!!!
  it('retorna "Poppy" e "Shen" do tipo "Tank" para dificuldade "médio"', () => {
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = filtrarDados(resultado, "Tank", "Dificuldade", "dif-medio");
    expect(dadosFiltrados.length).toEqual(2);
    expect(dadosFiltrados[0].name).toBe("Poppy");
    expect(dadosFiltrados[1].name).toBe("Shen");
  });
    // testando dificuldade médio para FIGHTER! >> OK!!!
    it('retorna "Poppy" do tipo "Fighter" para dificuldade "médio"', () => {
      const resultado = Object.values(objetoTest);
      const dadosFiltrados = filtrarDados(resultado, "Fighter", "Dificuldade", "dif-medio");
      expect(dadosFiltrados.length).toEqual(1);
      expect(dadosFiltrados[0].name).toBe("Poppy");
    });

    // testando dificuldade médio para MELEE! >> OK!!!
    it('retorna "Shen" do tipo "Melee" para dificuldade "médio"', () => {
      const resultado = Object.values(objetoTest);
      const dadosFiltrados = filtrarDados(resultado, "Melee", "Dificuldade", "dif-medio");
      expect(dadosFiltrados.length).toEqual(1);
      expect(dadosFiltrados[0].name).toBe("Shen");
    });
    
    // testando dificuldade difícil para SUPPORT! >> OK!!!
    it('espera que não retorne nenhum tipo para dificuldade "difícil"', () => {
      const resultado = Object.values(objetoTest);
      const dadosFiltrados = filtrarDados(resultado, "Support", "Dificuldade", "dif-dificil");
      expect(dadosFiltrados.length).toEqual(0);
    });
    
    // testando dificuldade difícil para MAGE! >> OK!!!
    it('espera que não retorne nenhum tipo para dificuldade "difícil"', () => {
      const resultado = Object.values(objetoTest);
      const dadosFiltrados = filtrarDados(resultado, "Mage", "Dificuldade", "dif-dificil");
      expect(dadosFiltrados.length).toEqual(0);
    });
});

//TESTES DA FUNÇÃO 'ordenarDados' >> OK!!!
describe("ordenarDados", () => {
  it("é uma função", () => {
    expect(typeof ordenarDados).toBe("function");
  });

//testando ordem NOME A-Z >> OK!!!
  it('retorna ordenação NOME A-Z', () => {
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = ordenarDados(resultado, "Nome");
    expect(dadosFiltrados.length).toEqual(6);
    expect(dadosFiltrados[0].name).toBe("Ahri");
    expect(dadosFiltrados[1].name).toBe("Caitlyn");
    expect(dadosFiltrados[2].name).toBe("Morgana");
    expect(dadosFiltrados[3].name).toBe("Poppy");
    expect(dadosFiltrados[4].name).toBe("Shen");
    expect(dadosFiltrados[5].name).toBe("Sona");
  });

//testando ordem NOME Z-A >> OK!!!
it('retorna ordenação NOME Z-A', () => {
  const resultado = Object.values(objetoTest);
  const dadosFiltrados = ordenarDados(resultado, "Nome", "ordem-decrescente");
  expect(dadosFiltrados.length).toEqual(6);
  expect(dadosFiltrados[0].name).toBe("Sona");
  expect(dadosFiltrados[1].name).toBe("Shen");
  expect(dadosFiltrados[2].name).toBe("Poppy");
  expect(dadosFiltrados[3].name).toBe("Morgana");
  expect(dadosFiltrados[4].name).toBe("Caitlyn");
  expect(dadosFiltrados[5].name).toBe("Ahri");
  });

  // testando função 'ordenarDados' pela ordem de dificuldade crescente >> OK!!!! 
  it('retorna ordenação por dificuldade crescente', () => {
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = ordenarDados(resultado, "Dificuldade");
    expect(dadosFiltrados.length).toEqual(6);
    expect(dadosFiltrados[0].name).toBe("Morgana");
    expect(dadosFiltrados[1].name).toBe("Sona");
    expect(dadosFiltrados[2].name).toBe("Caitlyn");
    expect(dadosFiltrados[3].name).toBe("Shen");
    expect(dadosFiltrados[4].name).toBe("Poppy");
    expect(dadosFiltrados[5].name).toBe("Ahri");
    });
});

//Teste da função "computeStats" >> OK!!!
describe("computeStats", () => {
  it("é uma função", () => {
    expect(typeof computeStats).toBe("function");
  });

  //Teste da função "computeStats" com percentual >> OK!!!
  it('retorna a porcentagem da pesquisa escolhida pelo usuário', () => {
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = filtrarDados(resultado, "Melee");
    const percentFiltrado = computeStats (dadosFiltrados, resultado).percentual;
    expect(percentFiltrado).toEqual("16.67");
  });
});








// Testando função checkGrau
// describe('checkGrau', () => {
//   it('é um objeto', () => {
//     expect(typeof checkGrau).toBe('object');
//   });
// });

// //teste OK!
// describe('dataLoL', () => {
//   it('deve ser um objeto', () => {
//     expect(typeof dataLoL).toBe('object');
//   });
// });

// describe('filtrarporTipo', ()=> {
//   it('vai filtrar os champs por tipo', () => {
//     const tipoEsperado = dataLoL.filtrarporTipo(objetoTest, "tipo");
//     expect(tipoEsperado.length).toBe(6);
//     // expect(tipoEsperado).toEqual([objetoTest[0],objetoTest[2], objetoTest[3]]);
//   });
// });

// //   it('returns `example`', () => {
// //     expect(example()).toBe('example');
// //   });
// // });

// // describe('anotherExample', () => {
// //   it('is a function', () => {
// //     expect(typeof anotherExample).toBe('function');
// //   });

// //   it('returns `anotherExample`', () => {
// //     expect(anotherExample()).toBe('OMG');
// //   });
// // })
