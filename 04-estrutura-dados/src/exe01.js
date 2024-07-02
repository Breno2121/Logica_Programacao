import leia from 'readline-sync'

var lista = [0, 0]
var pos = 0;


pos = (0, 0)
var nomes0 = leia.question("Nome: ");
lista[pos] = nomes0;
pos = (0, 1)
var idade0 = leia.question("Idade: ");
lista[pos] = idade0;
pos = (0, 2)
var telefone0 = leia.question("Telefone: ");
lista[pos] = telefone0;

pos = (1, 0)
var nomes0 = leia.question("Nome: ");
lista[pos] = nomes0;
pos = (1, 1)
var idade0 = leia.question("Idade: ");
lista[pos] = idade0;
pos = (1, 2)
var telefone0 = leia.question("Telefone: ");
lista[pos] = telefone0;

console.log(lista[0], lista[1], lista[2]);
console.log(lista[0,0]);
console.log([0,1]);
