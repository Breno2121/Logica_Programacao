import leia from 'readline-sync'

var estacarregando = true;
var porcentagem = 0;

while(estacarregando) {
    console.log(porcentagem + "% Carregando...");
    
    if (porcentagem < 100){
        porcentagem += 10;
    }else {
        estacarregando = false;
    }
}
