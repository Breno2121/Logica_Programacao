import leia from 'readline-sync'

var vetor1 = [];
var vetor2 = [];
var vetor3 = [];
var vetorr = [];

for(var i = 0; i < 9; i++){
    vetor1.push((" " + parseInt(Math.random() * 100)));
    vetor2.push((" " + parseInt(Math.random() * 100)));
    vetor3.push((" " + parseInt(Math.random() * 100)));
    if(i <= 2){
        vetorr[i] = vetor1[i];
    }else if(i > 2 && i <= 5){
        vetorr[i] = vetor2 [i];
    }else{
        vetorr[i] = vetor3 [i];
    }
}

console.log("Vetor 1: " + vetor1)
console.log("Vetor 2: " + vetor2)
console.log("Vetor 3: " + vetor3)
console.log("Vetor resultado: " + vetorr)
