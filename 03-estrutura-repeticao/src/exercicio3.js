import leia from 'readline-sync'

var numero1 = 1000;
var numero2 = 1999;

var dif = (numero2 - numero1);

for(var i = 0; i <= dif; i++){
    if(i % 11 == 5){
    console.log(i);
}
}
