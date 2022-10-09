// Atividades Node.js
// 5 - Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

// import modules
const rs = require("readline-sync")
const bar = require("./bar")

// ask user for 3 numbers
console.log("Digite 3 números inteiros: ")
let num1 = rs.questionInt(" 1 - >>")
let num2 = rs.questionInt(" 2 - >>")
let num3 = rs.questionInt(" 3 - >>")
