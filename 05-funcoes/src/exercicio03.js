import leia from 'readline-sync'
/*
var vetor = [];

for(var i = 0; i <= 3; i++) {
    var numero = leia.questionInt("Digite um numero par: \n");
    if(numero % 2 === 0){
        vetor.push(numero);
    }else{
        console.log("NUMERO DIGITADO E IMPAR");
        i--;
    }
}
console.log(vetor);
*/
var vetor = [];
function exercicio03() {
for (var i = 0; i < 4; i++){
    var numero = leia.questionInt("Digite um numero par: ");
    while(numero % 2 !== 0){
        numero = leia.questionInt("VOCE DIGITOU UM NUMERO IMPAR, DIGITE UM NUMERO PAR: ");
    }
    vetor[i] = numero;
}
console.log(vetor);
}

exercicio03();
