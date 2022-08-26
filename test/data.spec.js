import { dataLoL } from '../src/data.js';

const objetoTest = {
  Champs: {
    champ1: {
      info:{
        nome: "Ahri",
        dificuldade: "7",
      },
      tipo: ["Mago", "Assassino"],
    },
  
    champ2: {
      info:{
        nome: "Caitlyn",
        dificuldade: "4",
      },
      tipo: ["Atirador"],
    },

    champ3: {
      info:{
        nome: "Morgana",
        dificuldade: "1",
      },
      tipo: ["Mago", "Suporte"],
    },

    champ4: {
      info:{
        nome: "Sona",
        dificuldade: "3",
      },
      tipo: ["Suporte", "Mago"],
    },

    champ5: {
      info:{
        nome: "Poppy",
        dificuldade: "5",
      },
      tipo: ["Tanque", "Lutador"],
    },

    champ6: {
      info: {
        nome: "Shen",
        dificuldade: "4",
      },
      tipo: ["Tanque", "Melee"],
    },
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

// describe('filtrarPorStatus', () => {
//   it('é uma função', () => {
//     expect(typeof rickAndMorty.filtrarPorStatus).toBe('function');

//   });

  // it('filtra o status dos personagens mortos', () => {
  //   const expectedStatus = rickAndMorty.filtrarPorStatus(arrayTest, "dead");
  //   expect(expectedStatus.length).toEqual(1);
  //   expect(expectedStatus).toEqual([arrayTest[3]]);
        
  // });

//   it('filtra o status dos personagens vivos', () => {
//     const expectedStatus = rickAndMorty.filtrarPorStatus(arrayTest, "alive");
//     expect(expectedStatus.length).toEqual(3);
//     expect(expectedStatus).toEqual([arrayTest[0],arrayTest[1],arrayTest[2]]);
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
