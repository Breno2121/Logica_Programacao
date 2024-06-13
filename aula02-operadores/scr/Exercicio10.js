import leia from "readline-sync"

console.log("Doe para o crianca esperanca e faca criancas felizes!!! \n");
var doacao = leia.questionInt("Selecione o valor que deseja doar: \n 1: R$10 \n 2: R$25 \n 3: R$50 \n 4: Outro valor \n");

switch(doacao){
    case 1:
        console.log("Obrigado por doar R$10, o crianca esperanca Agradece!");
    break
    case 2:
        console.log("Obrigado por doar R$25, o crianca esperanca Agradece!");
    break
    case 3:
        console.log("Obrigado por doar R$50, o crianca esperanca Agradece!");
    break
    case 4:
        var valor = leia.questionFloat("Digite o valor a ser doado: \n")
        console.log("Obrigado por doar R$" + valor + ", o crianca esperanca Agradece!");
    break
}


