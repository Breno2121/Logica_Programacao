import leia from 'readline-sync'

var vetor = [];
var vogais = [];
var c1 = 0;

vetor = leia.question("Digite uma palavras: ");

for (var i = 0; i < vetor.length; i++){
    if(vetor[i] === "a" || vetor[i] === "e" || vetor[i] === "i" || vetor[i] === "o" || vetor[i] === "u"){
       vogais.push(" " + vetor[i]);
        c1++;
    }
}
console.log(vetor);
console.log("A palavra digitada contem " + c1 + " vogais.");
console.log("As vogais sao:"+ vogais);

