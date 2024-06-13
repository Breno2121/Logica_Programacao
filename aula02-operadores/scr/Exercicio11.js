import leia from "readline-sync"

var time1 = leia.question("Digite o nome do primeiro time: \n");
var golst1 = leia.questionInt("Digite a quantidade de gols: \n");
var time2 = leia.question("Digite o nome do segundo time: \n");
var golst2 = leia.questionInt("Digite a quantidade de gols: \n");

var diferenca = (golst1 - golst2);

if (diferenca == 0){
    console.log("EMPATE!");
}else if (diferenca == 1 || diferenca == 2 || diferenca == 3){
    console.log("Partida normal!");
}else if (diferenca >= 4){
    console.log("GOLEADAAAA!!!")
}
