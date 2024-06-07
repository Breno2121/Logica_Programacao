import leia from "readline-sync"

console.log("Digite o nome do primeiro cliente: \n");
var cliente1 = leia.question();

console.log("\nDigite o valor total da compra: \n");
var valorcli1 = leia.questionFloat("R$");

console.log("\nDigite o nome do segundo cliente: \n");
var cliente2 = leia.question();

console.log("\nDigite o valor total da compra: \n");
var valorcli2 = leia.questionFloat("R$");

var total = (valorcli1 + valorcli2);
var media = (total / 2);

console.log("\nValor total das vendas: R$", total);
console.log("\nValor medio das vendas: R$", media);

if (valorcli1 > 20) {
    console.log("\n", cliente1, "gastou: R$", valorcli1);
}
if (valorcli2 > 20) {
    console.log("\n", cliente2, "gastou: R$", valorcli2);
}

