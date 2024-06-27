import leia from 'readline-sync'
/*
var numero = leia.questionInt("Digite um numero: ");
var anterior = 0;
var proximo = 1;
var soma = 0;
// 0 1 2 3 4 5 6 7  8
// 0 1 1 2 3 5 8 13 21

for(var i = 0; i < numero; i++){
    soma = anterior + proximo
    anterior = proximo
    proximo = soma
    console.log(anterior + " + " + soma);
}
console.log(anterior);
*/
var numero = leia.questionInt("Digite um numero: ");

var anterior = 1;
var atual = 1;
var proximo;
var resultado = "1 - 1";

for(var i = 2; i < numero; i++){
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
    resultado = resultado + " - " + proximo;
}
console.log(resultado);
