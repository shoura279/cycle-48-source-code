// // ? streams - http
// const fs = require('node:fs');
// // ? open - read - close
// // const data = fs.readFileSync('./week4/session2/data.txt', {encoding: "utf-8"});// working dir >> project >> terminal
// // console.log(data);
//
// // flow stream
// // >> open() >> emit event 'open'
// // >> ready for stream ready() >> emit event 'ready'
// // >> data * 20 -> chunks
// // >> end
// // >> close
// const {EventEmitter} = require('node:events')
// const readStream = fs.createReadStream('./week4/session2/data.txt', {
//     autoClose: false,
//     highWaterMark: 1,// >> 64 KB
//     encoding: "utf8"
// });
//
// const writeStream = fs.createWriteStream('./week4/session2/data-copy.txt', {});
// readStream.pipe(writeStream);
// // createReadStream() >> open() then emit event 'open'
// // console.log(readStream instanceof EventEmitter);
// // how to register event ? .on('event',function(){}) / register
// // how to trigger / emit event ? .emit('event') >> .emit('ka3bora')
// // readStream.on('open', function () {
// //     console.log('file is opened')
// // });
//
//
// // readStream.on('ready', function () {
// //     console.log('file is ready for stream.');
// // });
//
// readStream.on('data', function (chunk) {
//     // log(chunk);
//     writeStream.write(chunk);
// });
// readStream.on('end', function () {
//     writeStream.end();
// });
//
// // readStream.on('resume', function () {
// //     console.log('file is resumed.');
// // })
// // readStream.on('pause', function () {
// //     console.log('file is paused');
// // })
//
//
// // readStream.on('close', function () {
// //     console.log('file is closed');
// // });
//
//
// ? http >> Server == App + func
const http = require('node:http');
const fs = require('node:fs');
// routing >> endpoint >> APIs
// ? req >> object >> url , method
// ? url == '/user' , method == 'GET' >> get user
// ? url == '/user' , method == 'POST' >> create user
// ? url == '/user' , method == "DELETE" >> delete user
// ? url == '/user' , method == 'PUT' >> update user
// ? url == '/product' , method == "GET" >> get product
// ?
let users = JSON.parse(fs.readFileSync('./week4/session2/users.json', {encoding: "utf-8"}));// intro Database
const server = http.createServer((req, res) => {
    const {url, method} = req// distracting

    if (url === '/user' && method === "GET") {

        res.writeHead(200, 'hambozo', {'Content-Type': 'application/json'});
        // res.write(JSON.stringify(user));
        // return res.end();// end of stream
        const data = fs.readFileSync('./week4/session2/users.json')
        return res.end(data);
    } else if (url === '/user' && method === "POST") {
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;// '' + ladngaosgojsfbg >> adgosfbgjsbf
        })

        req.on('end', function () {
            // logic of code
            console.log(body);// string
            body = JSON.parse(body);
            // check user exist
            const userExist = users.find((user) => {
                return user.userName === body.userName;
            });
            // fail case
            if (userExist) {
                res.writeHead(409, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify({message: "user already exists", success: false}));
            }
            users.push(body); // [] >> [{3laa}]
            fs.writeFileSync('./week4/session2/users.json', JSON.stringify(users));
            // send response
            res.writeHead(201, {'Content-Type': 'application/json'});
            return res.end(JSON.stringify({message: 'user created successfully', success: true}));
        })
    } else if (url === '/user' && method === "PUT") {
        res.write('update is done');
        res.end();
    } else {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: "invalid url or method", success: false}));
    }
});

server.listen(3000, function () {
    console.log('Server started on port 3000');
});
// listen on 3000 >> send request handle >> send response