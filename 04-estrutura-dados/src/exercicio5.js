import leia from 'readline-sync'

var lista = [];

for(var i = 9; i >= 0; i--){
    lista[i] = leia.question("Digite um numero: ");
}
console.log(lista);
