import leia from "readline-sync"

var cnt = 0;

while(cnt == 0){

var placa = leia.question("Digite a placa: ");

var ultimodigito  = placa.charAt(placa.length - 1);

switch(ultimodigito){
    case "0":
    case "1":
        console.log("Não pode andar as segunda-feira\n");
    break
    case "2":
    case "3":
        console.log("Não pode andar as terça-feira\n");
    break
    case "4":
    case "5":
        console.log("Não pode andar as quarta-feira\n");
    break
    case "6":
    case "7":
        console.log("Não pode andar as quinta-feira\n");
    break
    case "8":
    case "9":
        console.log("Não pode andar as sexta-feira\n");
    break
    default:
        console.log("Placa invalida\n");
        cnt = 1;
    break
}
}
