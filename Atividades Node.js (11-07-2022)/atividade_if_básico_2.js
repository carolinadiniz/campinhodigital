// Atividade Node.js
// 2 - Faça um programa que receba um número do usuário e verifique se este número é par ou ímpar, escrevendo na tela "PAR" ou "IMPAR".

// Import modules
const rs = require("readline-sync")

// Get a number from user
console.log("Digite um número para saber se é par ou impar:")
let number = rs.questionInt(" >> ")

// calcules if number it's even or odd
console.clear()
if (number % 2 == 0) {
    console.log(`\nO número ${number} é PAR!\n`)
} else {
    console.log(`\nO número ${number} é IMPAR!\n`)
}