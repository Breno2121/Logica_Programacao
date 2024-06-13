import leia from "readline-sync"
var c
for (c = 0; c<5; c++){

var mes = leia.questionInt("Digite o numero do mes desejado: \n");

switch (mes){
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
    console.log("Possui 31 Dias!");
break

case 2:
    console.log("Possui 28 Dias!");
break

case 4:
case 6:
case 9:
case 11:
    console.log("Possui 30 dias!");
break
default:
    console.log("INVALIDO");
break
}
}


