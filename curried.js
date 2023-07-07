// Introdução ao curry e aplicação parcial
// A aridade de uma função é o número de argumentos que ela requer. Currying de uma função significa converter uma função de N aridade em N funções de aridade 1.

// Em outras palavras, ele reestrutura uma função para que ela receba um argumento e, em seguida, retorne outra função que receba o próximo argumento e assim por diante.

// Aqui está um exemplo:

// function unCurried(x, y) {
//   return x + y;
// }

// function curried(x) {
//   return function(y) {
//     return x + y;
//   }
// }

// const curried = x => y => x + y

// curried(1)(2)
// curried(1)(2)voltaria 3.

// Isso é útil em seu programa se você não puder fornecer todos os argumentos para uma função de uma só vez. Você pode salvar cada chamada de função em uma variável, que conterá a referência de função retornada que recebe o próximo argumento quando estiver disponível. Aqui está um exemplo usando a função curried no exemplo acima:

// const funcForY = curried(1);
// console.log(funcForY(2)); // 3
// Da mesma forma, a aplicação parcial pode ser descrita como a aplicação de alguns argumentos a uma função por vez e o retorno de outra função aplicada a mais argumentos. Aqui está um exemplo:

// function impartial(x, y, z) {
//   return x + y + z;
// }

// const partialFn = impartial.bind(this, 1, 2);
// partialFn(10); // 13
// Preencha o corpo da addfunção para que ela use currying para adicionar parâmetros x, ye z.

function add(x) {
  // Only change code below this line
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };

  // Only change code above this line
}

add(10)(20)(30);
