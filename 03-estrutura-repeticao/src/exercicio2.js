import leia from 'readline-sync'

var numero = leia.questionInt("Digite um numero: ");

while (numero >= 0){
    console.log(numero);
    numero --;
}
