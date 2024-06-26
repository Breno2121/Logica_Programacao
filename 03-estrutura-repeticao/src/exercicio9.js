import leia from 'readline-sync'
var c1 = 0;

do{
var numero = leia.question("Digite um numero: ");
if(numero > 100 && numero < 200){
    c1++;
  }
}while(numero != 0)
    console.log("Foi digitado " + c1 + " vezes numeros entre 100 e 200.");

