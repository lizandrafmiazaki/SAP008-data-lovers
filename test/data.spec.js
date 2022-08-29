// import { checkGrau, filtrarDados, ordenarDados, computeStats } from "../src/data.js";
import {filtrarDados,} from "../src/data.js";

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

// //testando se nosso objeto é um objeto mesmo! teste OK!
describe('objetoTest', () => {
  it('deve ser um objeto', () => {
    expect(typeof objetoTest).toBe('object');
  });
});

//testando nossa função filtro >> OK
describe('filtrarDados', () => {
  it('é uma função', () => {
    expect(typeof filtrarDados).toBe('function');
  });

  it('retorna tipo "Melee"', () => {
    const resultado = Object.values (objetoTest);
    expect(filtrarDados(resultado, "Melee")).toBe("Shen");
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
