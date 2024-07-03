import leia from "readline-sync"

var lista = [];
var lista1 = [];

for(var i = 0; i < 10; i++){
    var numero = leia.questionInt("Digite um numero: ");
    lista.push(numero);
}
for(var s = 0; s < lista.length; s++){
    var soma = lista[s] * 5
    lista1.push(soma);
}

console.log(lista + " \n " + lista1);
