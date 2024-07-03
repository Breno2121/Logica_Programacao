import leia from "readline-sync"

var lista = [];
var soma = 0;

for(var i = 0; i < 5; i++){
    var numero = leia.questionInt("Digite um numero: ");
    lista.push(numero);
    var soma = (numero + soma);
}
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(lista[3]);
console.log(lista[4]);
console.log("A soma total e :" + soma);
