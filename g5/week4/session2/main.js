// // core module >> nodeJS
// // ? streams - http
// const fs = require('node:fs');
// const {EventEmitter} = require('node:events')
// // 1GB >> 512 MB
// // const data = fs.readFileSync('./week4/session2/data.txt', {encoding: "utf-8"});
// // console.log(data);
//
// // ? problem 1: performance >> main thread >> block >> [open - read - close]
// // ? problem 2: memory management
//
// const readStream = fs.createReadStream('./week4/session2/data.txt', {
//     highWaterMark: 1 * 1024 * 1024, // byte >> kB >> MB
// });
//
// const writeStream = fs.createWriteStream('./week4/session2/data-copy.txt');
//
// // register
//
//
// // end stream -> close
//
// let counter = 1;
// // readStream.on('data', function (chunk) {
// //     readStream.pause()
// //     writeStream.write(chunk);
// ///    if(writeStream.finish())
// //              readStream.resume()
// // });
// //
// // readStream.on('end', function () {
// //     writeStream.end();
// // });
//
//
// // ! back pressure
// // ! >> chunk1 - chunk2 - chunk3 - chunk1 - chunk2 - chunk3 >> end() - end()
// // ! >> chunk1 - chunk2
//
// // ! producer - consumer
// // ! writeStream >> consumer
// // ! readStream  >> producer >> faster that consumer
// readStream.pipe(writeStream);
// // trigger - emit
//
// // ? 5 - stages >> createReadStream(path)
// // ? 1. open() -> file -> once -> emit event 'open'
// // ? 2. ready() >> prepare file for streaming -> once >> emit event 'ready'
// // ? 3. data >> 500 - 414 - 1 -> chunks >> action >> implement
// // ? 4. end() -> stream is ended
// // ? 5. close() -> file

// ? http -> core module -> requests - responses - server
const http = require('node:http');// js object notation
let users = [{userName: "ka3bora", email: "k@g.com", password: 12345}] // >> string >> JSON
// lovable
const server = http.createServer((req, res) => {
    const {url, method} = req;

    // routing - APIs
    if (url === '/user' && method === 'GET') {
        // logic get user
        // send pdf - wrod - excel - image - string -
        // send metadata -> headers
        // get users data from file -> readFile
        res.writeHead(200, {"content-type": "application/json"}); // search point ::> mimetypes >> image/jpeg
        res.write(JSON.stringify(users));// string - buffer >> 01 22 30 20 93 58 48 58 58 50 04 40 49 ->
        res.end();
    } else if (url === '/user' && method === 'POST') {
        // logic of create user
        let body = '';
        req.on('data', (chunk) => {
            body += chunk; // body = chunk1 + chunk2 + chunk3 ...
        });
        req.on('end', () => {
            console.log(body);
            body = JSON.parse(body);
            console.log(body);// new user
            users.push(body);
            // todo: write user into file users.josn
            res.writeHead(200, {"content-type": "application/json"});
            res.write(JSON.stringify({message: "user created successfully", success: true}));// 01 20 22 36
            res.end();
        });
    } else if (url === '/product' && method === 'GET') {
        // logic get product
    } else if (url === '/product' && method === 'POST') {
        // logic of create product
    }
});
// node -> 3000
server.listen(3000);

// routing -> url + method
// /user GET    >> get user
// /user DELETE >> delete user
// /user PUT    >> update user
// /user POST   >> create user

// /product GET    >> get product
// /product DELETE >> delete product
// /product PUT    >> update product
// /product POST   >> create product