import leia from 'readline-sync'

var val = 1.50;
var jo = 1.40;
var a = 0;

while(val >= jo){
    val += 0.02;
    jo += 0.03;
    a++;
}
    console.log("Em " + a + " Anos joao sera maior que valeria.");
    console.log("A altura de Valeria e: " + val);
    console.log("A altura de Joao e: " + jo);

