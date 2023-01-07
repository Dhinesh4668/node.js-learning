const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server was created");
})

server.listen(3000, 'localhost', ()=>{
    console.log('this is the listener');
})