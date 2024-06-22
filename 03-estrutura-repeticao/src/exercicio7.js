import leia from 'readline-sync'

var c1 = 10;
var c2 = 900;

for (var i = 0; i < 500; i++){
    if(c1 <= 100){
        console.log(c1);
        if(c1 === 100){
            console.log("- - - - - - - - - - - \n FIM PRIMEIRA CONTAGEM");
        }
        c1++;
    }else if(c2 <= 1000){
        console.log(c2)
        c2++;
    }
}
