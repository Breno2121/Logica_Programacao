// IF //ELSE
/*
var numero = 1;

if (numero > 0) {
 console.log("number positivo...")

} else if (numero < 0) {
    console.log("number negativo...")
} else {
   console.log("The number is 0.")
}
*/
import leia from "readline-sync"


var nota = Number(leia.question("Digite a nota: ", "/n"))

switch (nota) {
    case 1:
    case 2:
    case 3:    
    case 4:    
    console.log("Rambo que fez")
            break
        case 5:
        case 6:
        case 7:    
        case 8:
        console.log("brunin que fez")
        break
    default:
        console.log("Brenin fodao que atuou")
        break
}
