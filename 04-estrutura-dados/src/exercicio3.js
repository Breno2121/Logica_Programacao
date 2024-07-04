import leia from 'readline-sync'

var lista = [];
var listap = [];

for(var i = 0; i < 10; i++){
    var number = leia.question("Digite um numero: ");
    lista.push(number)
    if(number % 2 === 0){
        listap.push(number);
    }
}
console.log(listap)
