// Atividade While
// 1 -Faça um algoritmo que receba uma entrada do usuário e caso encontre uma vogal transforme ela em maiúscula (Obrigatório usar FOR)

const rs = require('readline-sync')

console.log("Digite uma frase:")
let sentense = rs.question(">>")
let new_sentense = ""

for(let i=0; i<sentense.length;i++) {
    switch (sentense.charAt(i).toLowerCase()) {
        case "a":
            new_sentense+= "A"
            break;
        case "e":
            new_sentense+= "E"
            break;
        case "i":
            new_sentense+= "I"
            break;
        case "o":
            new_sentense+= "O"
            break;
        case "u":
            new_sentense+= "U"
            break;
        default:
            new_sentense+=sentense.charAt(i).toLowerCase()
            break;
        }
}

console.log(new_sentense)