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
    ["Support", "dif-facil", 2, [objetoTest.champ3, objetoTest.champ4]],
    ["Mage", "dif-medio", 1, [objetoTest.champ1]],
    ["Assassin", "dif-medio", 1, [objetoTest.champ1]],
    ["Marksman", "dif-medio", 1, [objetoTest.champ2]],
    ["Tank", "dif-medio", 2, [objetoTest.champ5, objetoTest.champ6]],
    ["Fighter", "dif-medio", 1, [objetoTest.champ5]],
    ["Melee", "dif-medio", 1, [objetoTest.champ6]],
    ["Support", "dif-dificil", 0, []]
  ])("Deve retornar os personagens corretos do TIPO %s para DIFICULDADE %s", (tag, nivelDificuldade, length,result)=>{
    const resultado = Object.values(objetoTest);
    const dadosFiltrados = filtrarDados(resultado, tag, "Dificuldade", nivelDificuldade);
    expect(dadosFiltrados.length).toEqual(length);
    expect(dadosFiltrados).toEqual(result);
  })
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
