import leia from 'readline-sync'

var lista = [];
var listai = [];

for(var j = 9; j > 0;){
for(var i = 0; i <= 9; i++){
    var numero = leia.question("Digite um numero: ");
lista.push(" " + numero);
listai[j] = " " + numero;
j--;
}
}
console.log("Sequencia: " + lista);
console.log("Inverso: " + listai);
