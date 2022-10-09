// Atividade Node.js
// 2 - Faça um programa que receba um número do usuário e verifique se este número é par ou ímpar, escrevendo na tela "PAR" ou "IMPAR".

const rs = require("readline-sync")

console.log("Digite um número para saber se é par ou impar:")
let number = rs.questionInt(" >> ")

if (number % 2 == 0) {
    console.log(`O número ${number} é PAR!`)
} else {
    console.log(`O número ${number} é IMPAR!`)
}