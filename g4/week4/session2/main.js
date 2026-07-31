// // ? core module in node.js
// // ? streams - http >> create app handle requests - send response
//
// const fs = require('node:fs');
// const {EventEmitter} = require('node:events');
// // const data = fs.readFileSync('./week4/session2/data.txt', {encoding: "utf8"});
// // console.log(data);
// const readStream = fs.createReadStream('./week4/session2/data.txt');
// const writeStream = fs.createWriteStream('./week4/session2/data-copy.txt');
// // console.log(writeStream instanceof EventEmitter);
// // register events - listener
//
// let counter = 1;
// // readStream.on('data', function (chunk) {
// //     writeStream.write(chunk);// write on data-copy.txt * 413
// // });
// //
// // readStream.on('end', function () {
// //     writeStream.end();// call end -> write
// // });
//
// readStream.pipe(writeStream);
//
// // createReadStream >> end(); -> listen event end
// // createWriteStream>> end() -> listen event end
//
// // trigger or emit events
// // ? 2 problem : 1- readFileSync >> main thread >> block >> [open - read - close]
// // ?           : 2- memory management >> readFileSync >> data >> 1GB 5 * 1GB >> 512 MB
// // ? solve -> stream file
// // createReadStream(path) >> file stream
// // 1. open() -> open file -> emit event 'open'
// // 2. ready() >> ready file for streaming -> emit event 'ready'
// // 3. data >> data X 4
// // 4. end() -> end stream -> emit event 'end'
// // 5. close() -> close file  >>
// // ? readStream.pause() -> readStream.resume() -> readStream.pause() -> readStream.resume()
// // ? back pressure -> producer - pipe - consumer >> source - pipe - destination
// //? producer faster than consumer -> chunk1 , chunk2, chunk3 -> chunk1
// //? producer [readStream] - consumer [writeStream]
// //?
// //?
// ********************
// *                  *
// *                  *
// *                  *
// *                  *
// *                  *
// ********************
//? http
const http = require('node:http');
// routing >> url - method

// url == '/user' method == 'GET' >> action >> get users
// url == '/user' method == "DELETE" >> action delete user
// url == '/user' method == 'PUT' >> action update user
// url == '/user' method == "POST" >> action create user

// url == '/product' method == 'GET' >> action >> get products
// url == '/product' method == "DELETE" >> action delete product
// url == '/product' method == 'PUT' >> action update product
// url == '/product' method == "POST" >> action create product
// server = app
// 01 11 22 se 45 65 99 99 45 20 >> JSON >> [{}]
let users = [{userName: "ka3bora", password: "12345", email: "k@g.com"}]
const server = http.createServer((req, res) => {
    // req >> object >> readStream
    // res >> object >> writeStream
    const {url, method} = req;
    if (url === "/user" && method === "GET") {
        res.writeHead(200, {"content-type": "application/json"});
        res.write(JSON.stringify(users));// string or buffer >> network >> buffer >> 01 23 44 06 6t FF >>FE
        res.end();
    } else if (url === '/user' && method === "POST") {
        // 1. get data from req >> readStream
        let body = '';
        req.on('data', (chunk) => {
            body += chunk; // body = chunk1 + chunk2 + chunk 3 ... chunk20
        });
        req.on('end', () => {
            // logic
            // body is a string >> convert to js object
            body = JSON.parse(body);
            console.log(body);
            // users push new user
            users.push(body);
            // send response
            res.writeHead(201, {"content-type": "application/json"});// set headers >> meta data
            res.write(JSON.stringify({message: "user created successfully", success: true}));
            res.end();
        })
    } else if (url === '/user' && method === 'PUT') {
        // let body =''
        // get data from req >> readStream >> on ('data',chunk)
        // on(end)
        // logic update
        // send response -> res.writeHead - res.write - res.end
    } else {
        res.writeHead(400, {"content-type": "application/json"});
        res.write(JSON.stringify({message: "invalid url or method😡", success: false}));
        res.end()
    }
});
// nodeJS >> 3000
server.listen(8000);

// chrome >> url >> http://127.0.0.1:8000