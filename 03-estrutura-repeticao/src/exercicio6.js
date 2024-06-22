import leia from 'readline-sync'

var numero = leia.questionInt("Digite um numero: ");
var i = 0;

while(i <= 10){
    console.log(numero + " X " + i + " = " + (numero * i));
    i ++;
}
