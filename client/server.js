const http = require('http');

const fs = require('fs')
const port = '3000'
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);



    res.setHeader('content-type', 'html')

    let path = './page/';
    switch (req.url) {
        case '/':
            path += 'index.html'
            break;
    
        default:
            path += '404.html' 
            break;
    }

    fs.readFile('./page/index.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.end(data)
        }
    })

})

server.listen(port, 'localhost', () => {
    console.log(`listning the https://localhost:${port}`);
})


// create browser req and response
