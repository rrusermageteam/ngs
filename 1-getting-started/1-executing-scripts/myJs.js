let http = require('http');

let server = http.createServer((req, res) =>{
    res.end('Hello people!');
})

server.listen(4242, () =>{
    console.log('Server is running with NodeJs!')
})

