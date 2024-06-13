import leia from "readline-sync"

var format = new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: "BRL"
});


var salario = leia.questionFloat("Digite o valor do salario: ");

var emprestimo = leia.questionFloat("Digite o valor do emprestimo: ");

var parcelas = leia.questionInt("Digite o numero de parcelas desejada: ");

var VD = (salario * 0.30);

var VP = (emprestimo / parcelas);

if(VP <= VD){
    console.log("Emprestimo APROVADO \n" + "Em " + parcelas + "X de " + format.format(VP));
}
else{
    console.log("Emprestimo recusado");
}
