import leia from 'readline-sync'
//Math.random() * 10 //numeros aleatorios
//parseint(Math.random() * 100)// arrendonda os numeros para inteiro
var numero = leia.questionInt("Digite um numero magico: ", {hideEchoBack: true});
var palpite = 0;
var c1 = 1;

while (palpite !== numero){
    palpite = leia.questionInt("Digite o possivel numero magico: ");
    if(palpite > numero){
        console.log("Chutou a mais");
    }else if(palpite < numero){
        console.log("Chutou pra menos");
    }else if(palpite == numero){
        console.log("Parabens voce acertou!!! " + numero + " \n Numero de tentativas: " + c1 + " vezes.");
    }
    c1++;
}
