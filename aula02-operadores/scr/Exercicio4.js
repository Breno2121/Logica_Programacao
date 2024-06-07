import leia from "readline-sync"

var cnt = 0;

while (cnt == 0){

console.log("Digite o numero de maça: \n");
var quantidade = leia.question();

if (quantidade > 12){
    var preco = (quantidade * 0.25);
} else{
    var preco = (quantidade * 0.30);
}
console.log("\n Valor total a pagar: \n", "R$", preco);
}
