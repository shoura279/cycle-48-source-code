// ? streams - http
// const fs = require('node:fs');
// const path = require('node:path');
// const {EventEmitter} = require('node:events');
// const event = new EventEmitter();
//
// event.on('ayhaga', () => {
//     console.log('ayhaga1');
// });
//
// event.on('ayhaga', () => {
//     console.log('ayhaga2');
// });
// console.log(event.eventNames())

// // const data = fs.readFile('./week4/session2/data.txt', {encoding: 'utf8'});
// // console.log(data);
// // /week4/session2 + './data.txt' >> "/week4/session2./data.txt"
// const filePath = path.join(__dirname, './data.txt');
// const readStream = fs.createReadStream('./week4/session2/data.txt', {
//     highWaterMark: 64 * 1024,
//     autoClose: false
// });
// const writeStream = fs.createWriteStream('./week4/session2/data-copy.txt')
// // createReadStream()
// // >> open() >> emit 'open'
// // >> ready() >> emit 'ready'
// // >> data * 405
// // >> emit 'end'
//
//
// // readStream.on('ready', function () {
// //     console.log('file is ready for streaming.')
// // })
// //
// // readStream.on('open', function () {
// //     console.log('file is opened!')
// // });
// //
// // let counter = 1;
// // readStream.on('data', function (chunk) {
// //     writeStream.write(chunk);
// // });
// //
// // readStream.on('end', function () {
// //     console.log('file is ended.');
// //     writeStream.end();
// //     // readStream.close();// emit 'close'
// // });
// //
// // readStream.on('close', function () {
// //     console.log('file is closed.');
// // });
//
// readStream.pipe(writeStream);
const http = require('node:http');
// routing
// url method
// url -> /user method -> GET
// url -> /user method -> DELETE
// url -> /user method -> PUT
// url -> /user method -> POST
// url -> /product method -> GET
// url -> /product method -> DELETE
const server = http.createServer((req, res) => {
    // res >> object >> WriteStream
    const {url, method} = req;
    if (url === '/user' && method === 'GET') {
        res.writeHead(200, {'content-type': 'application/json'});
        res.write(JSON.stringify({userName: "ka3bora", password: "12345"}));
        res.end();
    } else if (url === '/user' && method === "POST") {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        });
        req.on('end', () => {
            res.writeHead(201, {'content-type': 'application/json'});
            body = JSON.parse(body);
            res.end(JSON.stringify({message: "user created successfully.", success: true, data: body}));
        })
    }
}); // app
// ip >> 127.0.0.1:8080
server.listen(5050);
// console.log(1);