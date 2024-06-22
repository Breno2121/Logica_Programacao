import leia from 'readline-sync'

var preco = 0.33;

for(var i = 1; i <= 500; i++){
    console.log("O valor de " + i + " impressoes custa: R$" + preco);
    preco += 0.33;
}
