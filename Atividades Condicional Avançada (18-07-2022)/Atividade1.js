// Atividade Node.js
// 1 - Elabore um algoritmo que receba dois números e determine qual é o maior enntre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais"

// import modules
const rs = require("readline-sync")

console.log(" Digite dois números: ")
let num1 = rs.questionInt(" >> ")
let num2 = rs.questionInt(" >> ")

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
} else if (num1 < num2) {
    console.log(`${num2} é maior que ${num1}`)
} else {
    console.log(`Os números são iguais`)
}