import leia from 'readline-sync'

var vetor = [];
var invertida = [];
var invertidaok = [];

vetor = leia.question("Digite uma palavra ou frase: ");

for (var i = vetor.length -1; i >= 0; i--){
    invertida.push(vetor[i]);
}
//var invertidaok = invertida.join().replaceAll(" ", "");

invertida = "Este é um texto com espaços";
invertidaok = invertida.replaceAll(" ", "");
console.log(invertidaok); // Saída: "Esteéumtextocomespaços"


console.log(vetor);
console.log(invertida);
console.log(invertidaok);
