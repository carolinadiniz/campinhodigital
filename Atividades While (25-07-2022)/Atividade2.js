// Atividade FOR
// 2 - Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e o segundo é o valor final do contador (Verifique se o valor inicial é inferior ao valor final). Usando o comando For, escreva na tela uma cotagem que comece no primeiro número lido, escreva os números seguintes colocando apenas um número em cada nova linha da tela, até chegar ao valor indicado.

const rs = require("readline-sync")

console.log("Digite o valor inicial:")
let initial = rs.questionInt(">>  ")

console.log("Digite o valor final:")
let final = rs.questionInt(">>  ")

if (initial<final) {
    for(initial;initial <= final; initial++) {
        console.log(initial)
    }
}
else if(initial>final) {
    for(initial;initial >= final; initial--) {
        console.log(initial)
    }
}
else {
    console.log(initial)
}