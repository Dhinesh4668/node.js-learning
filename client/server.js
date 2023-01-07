const http = require('http');

const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('content-type', 'html')
    fs.readFile('./index.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.write(data)
            res.end();
        }
    })

})

server.listen(5000, 'localhost', () => {
    console.log('listning the localhost:3000');
})


// create browser req and response
