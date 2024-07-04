import leia from 'readline-sync'

var pai = [];
var mae = [];
var pivete = [];

for(var i = 0; i < 50; i++){
mae.push("  " + parseInt(Math.random() * 100));
pai.push("  " + parseInt(Math.random() * 100));
if(i % 2 == 0){
pivete.push(" Veio do pai:" + pai[i]);
}else{
    pivete.push(" Veio da mae:" + mae[i]);
}
}

console.log("Pai " + pai + "\n");
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Mae " + mae + "\n");
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Filho" + pivete + "\n");
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
