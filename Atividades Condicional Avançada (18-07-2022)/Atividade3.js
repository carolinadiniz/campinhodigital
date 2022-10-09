// Atividade Node.js
// Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

// import modules
const rs = require("readline-sync")

console.clear()
console.log("\nCALCULO DE TEMPO\n")
console.log("Digite a distância a ser percorrida:")
let distance = rs.questionInt(" >> ")

console.log("Digite a velocidade média esperada para a viagem: km/h")
let vm = rs.questionInt(" >> ")

// calcule (DT = Delta T to minutes)
DT = (distance/vm)*60
time = [parseInt(DT/60),(DT%60)]

console.log(`\n\nVocê levará aproximadamente ${time[0]}h ${time[1]}min para chegar ao destino.`)
