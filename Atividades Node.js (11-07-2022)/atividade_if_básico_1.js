// Atividade Node.js  - IF Básico
// 1 - Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que 
// diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

// Importing modules
const rs = require("readline-sync")

// Get current year
const current_year = new Date().getFullYear()

// Get user year of birth
let year_of_birth = rs.questionInt("Digite seu ano de nascimento: ")

// Show to user if can or not vote
if (current_year - year_of_birth >= 16) {
    // if yes
    console.log("\nVocê poderá votar!\n")
} else {
    // if not
    console.log("\nVocê não tem a idade mínima necessária para votar.\n")
}
