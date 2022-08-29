import { checkGrau, filtrarDados, ordenarDados, computeStats } from "../src/data.js";

const objetoTest = {
  champ1: {
    name: "Ahri",
    info: {
      difficulty: 7,
    },
    tags: ["Mago", "Assassino"],
  },

  champ2: {
    name: "Caitlyn",
    info: {
      difficulty: 4,
    },
    tags: ["Atirador"],
  },

  champ3: {
    name: "Morgana",
    info: {
      difficulty: 1,
    },
    tags: ["Mago", "Suporte"],
  },

  champ4: {
    name: "Sona",
    info: {
      difficulty: 3,
    },
    tags: ["Suporte", "Mago"],
  },

  champ5: {
    name: "Poppy",
    info: {
      difficulty: 5,
    },
    tags: ["Tanque", "Lutador"],
  },

  champ6: {
    name: "Shen",
    info: {
      difficulty: 4,
    },
    tags: ["Tanque", "Melee"],
  },
};

//teste OK!
describe('dataLoL', () => {
  it('deve ser um objeto', () => {
    expect(typeof dataLoL).toBe('object');
  });
});

// //testando se nosso objeto é um objeto mesmo!
// describe('objetoTest', () => {
//   it('deve ser um objeto', () => {
//     expect(typeof objetoTest).toBe('object');
//   });
// });

//testando nossa função filtro >> OK!
describe('filtrarporTipo', () => {
  it('é uma função', () => {
    expect(typeof dataLoL.filtrarporTipo).toBe('function');
  });
});

describe('filtrarporTipo', ()=> {
  it('vai filtrar os champs por tipo', () => {
    const tipoEsperado = dataLoL.filtrarporTipo(objetoTest, "tipo");
    expect(tipoEsperado.length).toBe(6);
    // expect(tipoEsperado).toEqual([objetoTest[0],objetoTest[2], objetoTest[3]]);
  });
});

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// })
