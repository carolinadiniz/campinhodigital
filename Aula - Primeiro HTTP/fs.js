const fs = require('fs');
fs.readFile('index.html', 'utf8', (err, arquivo) => {
    if (err) throw err;
    console.log(arquivo);
})

const arquivo = fs.readFileSync('index.html')
console.log(arquivo);