// Atividade Node.js
// 4 - As maçãs custam R$0,30 cada se forem compradas menos do que 12, e R$0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// import modules
const rs = require("readline-sync")
const bar = require("./bar")

// ask how much apples were bought
console.clear()
console.log("CALCULO DE MAÇÃS\n\nDIGITE O NÚMERO DE MAÇÃS COMPRADAS:")
let qt_apples = rs.questionInt(" >> ")

// calcule how much pay for apples
if (qt_apples >= 12) {
    //more/equal than 12
    console.log(`\n R$ 0,25 cada\n Total: R$ ${qt_apples*0.25}`)

} else {
    //bellow than 12
    console.log(`\n R$ 0,30 cada\n Total: R$ ${qt_apples*0.30}`)
}