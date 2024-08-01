import leia from 'readline-sync'

var notas = [];
var media = 0;
var aux = 0;

for(var i = 0; i < 6; i++){
    notas[i] = leia.questionFloat("Digite a nota " + (i + 1) + " : ");
}

var notasord = notas.sort((a, b) => a - b);
console.table(notasord)

for(var i = 1; i < notas.length - 1; i++){
aux += notasord[i];
}
console.log(aux)
media = (aux / 4);

console.log(media);
