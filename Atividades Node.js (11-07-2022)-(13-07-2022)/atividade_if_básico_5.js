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
console.clear()

// push numbers to array
numbers = []
numbers.push(num1)
numbers.push(num2)
numbers.push(num3)

// use method sort() to sort array
numbers.sort(function(a,b){
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
})

