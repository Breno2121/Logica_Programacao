import leia, { keyInSelect } from 'readline-sync'


function somar() {
    var num1 = leia.questionInt("Digite um numero: ")
    var num2 = leia.questionInt("Digite um numero: ")
    var result = num1 + num2;
    console.log("O resultado e: " + result)
}
function mult(num1, num2){
    var result = num1 + num2;
    return result;
}

somar ();
var calc = mult(2, 5);

console.log(calc);
