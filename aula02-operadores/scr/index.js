import leia from "readline-sync"

console.log(" Digite o valor da primeira corrida")
var corrida1 = Number(leia.question())

console.log(" Digite o valor da segunda corrida")
var corrida2 = Number(leia.question())

console.log(" Digite o valor da terceira corrida")
var corrida3 = Number(leia.question())

console.log(" Digite o valor da quarta corrida")
var corrida4 = Number(leia.question())

console.log(" Digite o valor da quinta corrida")
var corrida5 = Number(leia.question())

var total = (corrida1 + corrida2 + corrida3 + corrida4 + corrida5)
var result = (total - (total * 0.25))


console.log("Seu salario liquido será: R$" + result)
