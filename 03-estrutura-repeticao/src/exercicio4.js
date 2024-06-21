import leia from 'readline-sync'

var numeromaior;
var numeromenor;

for(var i = 0; i <= 5; i++){
    var numero = leia.questionInt("Digite um numero: ");
    if (i == 0 || numero > numeromaior){
        numeromaior = numero;
    }
    if (i == 0 || numero < numeromenor){
        numeromenor = numero;
    }
}
    console.log(numeromaior);
    console.log(numeromenor);

