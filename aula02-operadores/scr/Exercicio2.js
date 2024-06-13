import leia from "readline-sync"

var cnt = 0;

while(cnt == 0){

var numero = leia.questionInt("Digite um numero: ");

if (numero % 2 === 0){
    console.log("Numero é Par");
}else {
    console.log("Numero é Impar");
}
}