import leia from "readline-sync"

console.log("Digite o valor do produto desejado: \n");
var preco = leia.questionFloat();

var moeda1 = leia.questionFloat("Digite quantas moedas de 1 real voce tem: \n");


var moeda50 = leia.questionFloat("Digite quantas moedas de 50 centavos voce tem: \n");


var moeda25 = leia.questionFloat("Digite quantas moedas de 25 centavos voce tem: \n");


var moeda10 = leia.questionFloat("Digite quantas moedas de 10 centavos voce tem: \n");


var moeda5 = leia.questionFloat("Digite quantas moedas de 5 centavos voce tem: \n");

var tmoeda1 = (moeda1 * 1);
var tmoeda50 = (moeda50 * 0.50);
var tmoeda25 = (moeda25 * 0.25);
var tmoeda10 = (moeda10 * 0.10);
var tmoeda5 = (moeda5 * 0.10);

var total = (tmoeda1 + tmoeda10 + tmoeda25 + tmoeda5 + tmoeda50);

console.log("Valor total no cofrinho é de: R$" + total);

var troco = (total - preco);

if (total <= preco) {
    console.log("Seu dinheiro não da para comprar ainda");
}else {
console.log("Pode comprar, e sobrará: " + troco);
}
