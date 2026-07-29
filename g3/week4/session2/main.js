// ? streams - http
// const fs = require("node:fs");
// const {EventEmitter} = require("node:events");
// const data = fs.readFileSync('./week4/session2/data.txt', {encoding: "utf-8"})
// console.log(data);
// const readStream = fs.createReadStream('./week4/session2/data.txt', {});
// const writeStream = fs.createWriteStream('./week4/session2/data-copy.txt')
// chunk >> 64KB >> 64 * 1024 B >> 65536
// let counter = 1;
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });
// readStream.on('end', () => {
//     writeStream.end();// end stream write
// });
// readStream.pipe(writeStream);

// stages
// createReadStream()
// 1. open() >> emit 'open'
// 2. ready() >> for streaming emit 'ready'
// 3. data >> 44
// 4. end() >> end stream emit 'end'
// 5. close() >> close file
const http = require('node:http');
const fs = require('node:fs');
// routing
// url - method
// url == '/user' method =="GET" >> action >> get user
// url == '/user' method =="POST" >> action >> create user
// url == '/user' method =="DELETE" >> action >> delete user
// url == '/user' method =="PUT" >> action >> update user
// url == '/product' method == "GET"
let users = [{userName: "ka3bora", password: "12345678"}];
const server = http.createServer((req, res) => {
    const {url, method} = req;
    if (url.startsWith('/user') && method === "GET") {
        res.writeHead(200, {"content-type": "application/json"});
        const data = fs.readFileSync('./week4/session2/users.json');
        res.write(data);
        res.end();
    } else if (url === '/user' && method === "POST") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            body = JSON.parse(body);
            users.push(body);
            fs.writeFileSync('./week4/session2/users.json', JSON.stringify(users));
            res.writeHead(201, {"content-type": "application/json"});
            res.end(JSON.stringify({message: "user created successfully", success: true, data: body}));
        })
    } else {
        res.writeHead(404, {"content-type": "application/json"});
        res.end(JSON.stringify({message: "url or method not found", success: false}));
    }
});
server.listen(5050);
