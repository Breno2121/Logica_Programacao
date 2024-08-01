import leia from 'readline-sync'

var palavra = [];
var palavrainvertida = [];

palavra = leia.question("Digite um palavra ou frase: ");

var palavrasem = palavra.replace(/\s+/g, '');

console.log(palavra);

for (var i = palavra.length-1; i >= 0; i--){
    palavrainvertida.push(palavrasem[i]);
}

console.log(palavrasem);

console.log(palavrainvertida);

