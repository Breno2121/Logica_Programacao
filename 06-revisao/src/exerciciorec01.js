import leia from 'readline-sync'

var vetor = [];


for (var i = 0; i < 3; i++){
    vetor[i] = leia.question("Digite um numero: ");
}

var vetorord = vetor.sort();


console.table(vetorord);


