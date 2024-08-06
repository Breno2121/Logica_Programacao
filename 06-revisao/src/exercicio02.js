import leia from "readline-sync";

var numero = leia.questionInt("Digite um numero para tabuada: ");
var numeromenor = numero - 1;
var numeromaior = numero + 1;

for (var i = 0; i <= 10; i++) {
  var result1 = numeromenor * i;
  console.log(`${numeromenor} X ${i} = ${result1}`);
}
console.log("\n - - - - - - - - - - - - \n");
for (var i = 0; i <= 10; i++) {
  var result = numero * i;
  console.log(`${numero} X ${i} = ${result}`);
}
console.log("\n - - - - - - - - - - - - \n");
for (var i = 0; i <= 10; i++) {
  var result2 = numeromaior * i;
  console.log(`${numeromaior} X ${i} = ${result2}`);
}
