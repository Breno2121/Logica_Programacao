import leia from 'readline-sync'

function calculoporcent(vezesquecaiu){
    return (vezesquecaiu / tentativas) * 100;
}

const tentativas = 1000;
var index = 0;
var verde = 0;
var vermelho = 0;
var preto = 0;

while (index <= tentativas) {
    var valorsorteado = parseInt(Math.random() * 37);
    
    if(valorsorteado === 0){
        verde++;
    } else if(valorsorteado % 2 == 0){
        preto++;
    } else{
        vermelho++;
    }
    index++;
}

var porcentverde = calculoporcent(verde);
var porcentvermelho = calculoporcent(vermelho);
var porcentpreto = calculoporcent(preto);

if( porcentverde > 40 || porcentvermelho > 40 || porcentpreto > 40){
    console.log("Roleta pode estar viciada!!");
} else {
    console.log("Nao tem chance de estar viciada!!");
}
console.log(`Verde qtd: ${porcentverde.toFixed(2)}%`);
console.log(`Vermelho qtd: ${porcentvermelho.toFixed(2)}%`);
console.log(`Preto qtd: ${porcentpreto.toFixed(2)}%`);
