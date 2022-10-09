// Atividades Node.js
// 5 - Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

// import modules
const rs = require("readline-sync")
const bar = require("./bar")

// ask user for 3 numbers
console.log("Digite 3 números inteiros: ")
let num1 = rs.questionInt(" >>")
let num2 = rs.questionInt(" >>")
let num3 = rs.questionInt(" >>")

// push numbers to array
numbers = []
numbers.push(num1)
numbers.push(num2)
numbers.push(num3)

