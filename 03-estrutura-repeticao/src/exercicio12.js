import leia from 'readline-sync'

var numero = leia.questionInt("Digite um numero: ");
var resultado = 1;


while(numero > 0){
    resultado = (resultado * numero);
    console.log(resultado + " X " + numero);
    numero--;
}
console.log("Fatorial e: " + resultado);
