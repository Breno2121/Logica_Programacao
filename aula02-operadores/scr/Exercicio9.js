import leia from "readline-sync"

var salarioliq
var funcionario = leia.question("Digite o nome: \n");
var salario = leia.questionFloat("Digite o salario: \n");
var ND = leia.questionInt("Digite o numero de dependentes: \n");

switch(ND){

    case 0:
        salarioliq =  salario + (salario * 0.02)
            console.log("Seu salario liquido sera: R$" + salarioliq);
    break
    case 1:
        salarioliq = salario + (salario * 0.05)
            console.log("Seu salario liquido sera: R$" + salarioliq);
    break
    case 2:
        salarioliq = salario + (salario * 0.07)
            console.log("Seu salario liquido sera: R$" + salarioliq);
    break
    case 3:
        salarioliq = salario + (salario * 0.1)
            console.log("Seu salario liquido sera: R$" + salarioliq);
    break
    default:
        salarioliq = salario + (salario * 0.15)
            console.log("Seu salario liquido sera: R$" + salarioliq);
    break
}
