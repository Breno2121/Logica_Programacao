import leia from 'readline-sync'

var c1 = 1;
var npares = 0;
var nimpar = 0;

while(c1 <= 3){
    var numero = leia.questionInt("Digite um numero: ");
    if(numero % 2 == 0){
        if(npares === 0){
        npares = numero;
        }else {
            npares *= numero;
        }
    }else {
        nimpar += numero;
    }
    c1++;
}
console.log(nimpar);
console.log(npares);
