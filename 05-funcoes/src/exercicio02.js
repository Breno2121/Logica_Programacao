
var lista = [];
var compara = [];

for (var i = 0; i < 10; i++) {
  lista.push(parseInt(Math.random() * 50));
}
console.log(lista);
console.log("\n - - - - - - - - - - - - - - - \n");

for (var i = 0; i < lista.length; i++) {
  for (var j = i + 1; j < lista.length; j++) {
    if (lista[i] === lista[j]) {
      compara.push(lista[i]);
    }
  }
}
if(compara > 0){
  console.log("Numeros repetidos sao: " + compara);
}else {console.log("Nao ha numeros repetidos.");
}
