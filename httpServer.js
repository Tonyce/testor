const http = require('http')

http.createServer((req, res) => {
    res.on('finish', (args) => {
        console.log('finish', args)
    })
    res.end('hi')
}).listen(1122, () => {
    console.log('start server')
})