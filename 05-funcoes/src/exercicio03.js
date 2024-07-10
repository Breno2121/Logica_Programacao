import leia from 'readline-sync'

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
