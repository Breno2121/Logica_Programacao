import leia from 'readline-sync'

var lista = [];

for(var i = 0; i < 10; i++){
    var numero = leia.question("Digite um numero: ");
    lista.push(numero);
}
for(var i = 0; i < lista.length; i++){
    if(lista[i] >= 10){
        console.log(lista[i]);
    }
}
