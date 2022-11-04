const http = require('http')
const fs = require('fs')
const PORT = 3000

const server = http.createServer((req, res)=>{
    fs.readFile(`${__dirname}/index.html`, (err, html) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(html)
        res.end()
    })
})
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})