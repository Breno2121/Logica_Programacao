import leia from 'readline-sync'

var palavra = [];
var c1 = 0;

palavra = leia.question("Digite uma palavra ou texto: ");

for(var i = 0; i < palavra.length; i++){
    if(palavra[i] === "a" || palavra[i] === "e" || palavra[i] === "i" || palavra[i] === "o" || palavra[i] === "u"){
        c1++;
    }
}

console.log(palavra);
console.log(`contem ${c1} vogais!`);

