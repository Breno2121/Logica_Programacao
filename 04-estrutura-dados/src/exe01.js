import leia from 'readline-sync'

var lista = [];

var nomes0 = leia.question("Nome: ");
var idade0 = leia.question("Idade: ");
var telefone0 = leia.question("Telefone: ");
lista = [nomes0, idade0, telefone0];

var nomes1 = leia.question("Nome: ");
var idade1 = leia.question("Idade: ");
var telefone1 = leia.question("Telefone: ");
lista.push(nomes1, idade1, telefone1);

var nomes2 = leia.question("Nome: ");
var idade2 = leia.question("Idade: ");
var telefone2 = leia.question("Telefone: ");
lista.push(nomes2, idade2, telefone2);

for (var lin = 0; lin < 2; lin++) {
    for (var pos = 0; pos < lista.length; pos++) {
        console.log(lista[pos]);
    }
}

