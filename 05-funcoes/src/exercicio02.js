import leia from "readline-sync";

var vetor = [];
var vetoraux = [];
var vetoraux2 = [];
var ncomp;

for (var i = 0; i < 10; i++) {
  vetor.push(parseInt(Math.random() * 15));
}
console.log(vetor);

function verif(){
    for( var i = 0; i < vetor.length; i++){
        for(var j = 0; j < vetor.length; j++){
           if(j === 0){
            ncomp = vetor[j]
           }
            if(vetor[j] == ncomp){
              vetoraux[j] = ncomp;
            }
        }
    }
    return vetoraux
}
vetoraux2 = verif();
console.log(vetoraux2);
