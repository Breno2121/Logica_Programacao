import leia from "readline-sync"

var idade;
var perm = "nao";

console.log("Digite sua idade: ");
var idade = leia.question();

if(idade >= 18){
    console.log("Digite seu nome completo: \n");
    var nome = leia.question();
    console.log("Boa viagem!!");
}else if (idade < 18){
    console.log("Permissao sim ou nao? \n");
    var perm = leia.question();
    if (perm == "sim"){
        console.log("Digite seu nome: ");
        var nome = leia.question();
        console.log("Boa viagem!!");
    }else{
        console.log("NAO PODERA IR!");
    }
}
