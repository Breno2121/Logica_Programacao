import leia from 'readline-sync'

var matriz = [];
var nmaior = [];

for (var i = 0; i < 8; i++) {
    matriz[i] = [];
}

for (var j = 0; j < 8; j++) {
    for (var i = 0; i < matriz.length; i++) {
        matriz[j][i] = parseInt(Math.random() * 50);
    }
}
for (var j = 0; j < 8; j++) {
    for (var i = 0; i < matriz[i].length; i++) {
        if (matriz[j][i] > 10) {
            nmaior.push(matriz[j][i]);
        }
    }
}
console.table(matriz);
if (nmaior > 0) {
    console.log("Esses foram os numeros maiores que 10: " + nmaior);
} else {
    console.log("todos os numeros sao menores de 10.");
}
