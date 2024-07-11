import leia from 'readline-sync'
var maiormedia;
var nomemaiormedia;

for (var i = 0; i < 5; i++) {
    var nome = leia.question("Digite o nome do estudante " + i + ": ");
    var somanotas = 0.0;
    for (var j = 1; j <= 3; j++) {
        somanotas += leia.questionFloat("Digite a nota 0" + j + ": ");
    }
    var media = somanotas / 3;

    if (maiormedia === undefined || media > maiormedia) {
        maiormedia = media;
        nomemaiormedia = nome;
    }
}
console.log(nomemaiormedia);
console.log(maiormedia);
