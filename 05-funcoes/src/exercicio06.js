import leia from 'readline-sync'

var gabarito = [];
var respostas = [];
var nota =0;

for (var i = 0; i < 10; i++){
    gabarito[i] = leia.question("Digite a resposta para o gabarito da questao " + (i + 1) + ": ");
}
console.log("Digite suas respostas! ");
for (var i = 0; i < 10; i++){
    respostas[i] = leia.question("Digite a resposta da questao " + (i + 1) + ": ");
}
for (var i = 0; i < gabarito.length; i++){
    if(gabarito[i] === respostas[i]){
    nota++;   
}

}

console.table(gabarito);
console.table(respostas);
console.log("Sua nota foi: " + nota);
