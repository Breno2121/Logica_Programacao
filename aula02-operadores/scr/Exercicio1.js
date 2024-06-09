import leia from "readline-sync"

var senha = 1234;

while (senhadig != senha){
var senhadig = leia.questionInt("Digite a senha: ");

switch(senhadig){
    case 1234:
        console.log("Seja Bem-vindo(a)");
        break
    default:
        console.log("SENHA INVALIDA", "\n", "Tente novamente");
}
}