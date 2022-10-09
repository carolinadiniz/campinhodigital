// Atividade Node.js
// 4 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

// import modules
const rs = require("readline-sync")

console.clear()
console.log("Digite o preço da mercadoria: R$")
let valor = rs.questionInt(">>")

console.log("Digite quantos porcentos (%) de desconto: ")
let percent = rs.questionInt(">>")

let desc = valor*(percent/100)
let total = valor-desc

console.log(`\n\nValor do desconto: R$${desc}`)
console.log(`Valor a ser pago: R$${total}\n\n`)