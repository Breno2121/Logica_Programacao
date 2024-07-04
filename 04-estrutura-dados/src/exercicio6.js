import leia from 'readline-sync'

var listamax = [];
var listamin = [];
var aux = 0;

for(var i = 1; i <= 30; i++){
var max = Math.random() * 35 + 12;
var min = Math.random() * 35 + 12;

if(min > max){
    aux = min;
    min = max;
    max = aux;
}
listamax.push("Dia "+ i + " max: " + max.toFixed(1) + " °C");
listamin.push("Dia "+ i + " min: " + min.toFixed(1) + " °C");
}
for(var i = 0; i < listamax.length; i++){
console.log(listamax[i]);
console.log(listamin[i]);
console.log("- - - - - - - - - -");
}
