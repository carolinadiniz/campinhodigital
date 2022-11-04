const http = require("http")
const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html"})

    if (req.url === "/") {
        res.write('<h1> Página Principal </h1>')
    } else if (req.url === "/bemvinde") {
        res.write('<h1> Bem vinde ao Campinho Digital </h1>')
    } else {
        res.write('<h1> Página não encontrada </h1>')
    }
    res.end()

})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

