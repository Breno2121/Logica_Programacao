import leia from 'readline-sync'



var opcao = leia.keyInSelect(["C -> f",
 "C -> K",
 "K -> C",
 "K -> F",
 "F -> C",
 "F -> K"], "Selecione a opcao") + 1;

var temp = leia.questionFloat("Informe a temperatura: ")
switch(opcao){
    case 1:
        var F = (temp * 1.8) + 32;
        console.log(`Valor em FAHRENHEIT: ${F}`);
    break;
    case 2:
        var C = (temp - 32) * (5 / 9);
        console.log(`Valor em CELSIUS: ${C}`);
    break;
    case 3:
        var K = temp + 273.15;
        console.log(`Valor em KELVIN: ${K}`);
    break;
    case 4:
        var C = temp - 273.15;
        console.log(`Valor em CELSIUS: ${C}`);
    break;    
    case 5:
        var K = (temp - 32) * (5 / 9) + 273.15;
        console.log(`Valor em : ${K}`);
    break;    
    case 6:
        var F = (temp - 273.15) * 1.8 + 32;
        console.log(`Valor em : ${F}`);
    break;        
}

