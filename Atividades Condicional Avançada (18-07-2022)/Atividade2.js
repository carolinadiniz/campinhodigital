// Atividade Node.js
// 2 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

// import modules
const rs = require('readline-sync')

// Ask to user a number btw 1-7
console.clear()
console.log("Digite um número (1-7):")
let num = rs.questionInt(">> ")

console.log("")
switch (num) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda-feira")
        break;
    case 3:
        console.log("Terça-feira")
        break;
    case 4:
        console.log("Quarta-feira")
        break;
    case 5:
        console.log("Quinta-feira")
        break;
    case 6:
        console.log("Sexta-feira")
        break;
    case 7:
        console.log("Sábado")
        break;
    default:
        console.log("Número digitado inválido!")
        break;
}