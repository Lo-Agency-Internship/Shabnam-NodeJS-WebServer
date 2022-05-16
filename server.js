let http = require('http');
let fs = require('fs');
let path = require('path');
const port=8000;
let url=require('url')
path.join(__dirname)
const host = 'localhost';

let server=http.createServer(function (request, response) {
    let filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    let extname = path.extname(filePath);
    let contentType ="";
    switch (extname) {
        case '.js':
        contentType="text/javascript"
            break;
        case '.css':
            contentType=
            "text/css"
            break;
        case '.json':
           contentType=	
           "application/json"
            break;
        case '.png':
        contentType="image/png"
            break;        
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(response.writeHead(404)){
                response.writeHead(404);
                response.end('error 404 page not found!');
            }
            else {
                response.writeHead(500);
                response.end('error 500');
               
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
           

        }
    });

});
server.listen(8000);
