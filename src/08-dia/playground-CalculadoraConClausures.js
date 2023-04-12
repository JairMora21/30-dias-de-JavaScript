
function calcular(numero) {

  return {
    add: function (dato) {
      numero = numero + dato;
      return numero;
    },
    substract: function (dato) {
      numero = numero - dato;
      return numero;
    },
    divide: function (dato) {
        numero = numero / dato;
      return numero;
    },
    getTotal: function (dato) {
      return numero;
    },
    clear: function (dato) {
        numero = 0;
      return numero;
    }
  }
}


let op1 = calcular(5);
console.log(op1.add(10));
console.log(op1.add(20));

