import leia from 'readline-sync'
//parseint
var binario = "";
var decimal = leia.questionInt("Digite um numero: ");

while(decimal > 0){
var resultado = parseInt(decimal / 2); 
var resto = decimal % 2;
var decimal = resultado;
binario = resto + binario;
}
console.log(binario)
