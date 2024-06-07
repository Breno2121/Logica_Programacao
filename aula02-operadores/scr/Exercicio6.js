import leia from "readline-sync"

console.log("Digite o valor do produto desejado: \n");
var preco = leia.questionFloat();

var moeda1 = leia.questionFloat("Digite quantas moedas de 1 real você tem: \n");


var moeda50 = leia.questionFloat("Digite quantas moedas de 50 centavos você tem: \n");


var moeda25 = leia.questionFloat("Digite quantas moedas de 25 centavos você tem: \n");


var moeda10 = leia.questionFloat("Digite quantas moedas de 10 centavos você tem: \n");


var moeda5 = leia.questionFloat("Digite quantas moedas de 5 centavos você tem: \n");

var tmoeda1 = (moeda1 * 1);
var tmoeda50 = (moeda50 * 0.50);
var tmoeda25 = (moeda25 * 0.25);
var tmoeda10 = (moeda10 * 0.10);
var tmoeda5 = (moeda5 * 0.10);

var total = (tmoeda1 + tmoeda10 + tmoeda25 + tmoeda5 + tmoeda50);

console.log("Valor total no cofrinho é de: R$", total);

if (total < preco) {
    console.log("Seu dinheiro não da para comprar ainda");
}else {
console.log("");
}





