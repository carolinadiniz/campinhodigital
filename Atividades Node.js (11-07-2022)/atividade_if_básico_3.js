// Atividade Node.js
// 3 - Escreva um programa que verifique a validade de uma senha fornecida pelo usuário.
// A senha válida é o número 1234.
// Devem ser impressas as seguintes mensagens:
// - ACESSO PERMITIDO, caso a senha seja válida.
// - ACESSO NEGADO, caso a senha seja inválida.

// Import modules
const rs = require("readline-sync")
const bar = require("./bar")

// asking password to user]
console.clear()
console.log("\nDigite sua senha (apenas números):")
let password = rs.questionInt(" >> ")

// verify if password is correct
bar()
if (password === 1234) {
    console.log("\n   ACESSO PERMITIDO   \n")
} else {
    console.log("\n    ACESSO NEGADO!    \n")
}
bar()