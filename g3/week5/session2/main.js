// const crypto = require('node:crypto');
// const start = Date.now();
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('1:crypto ended at', Date.now() - start);
//     }
// )
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('2:crypto ended at', Date.now() - start);
//     }
// )
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('3:crypto ended at', Date.now() - start);
//     }
// )
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('4:crypto ended at', Date.now() - start);
//     }
// )
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('5:crypto ended at', Date.now() - start);
//     }
// )
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('6:crypto ended at', Date.now() - start);
//     }
// )
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('7:crypto ended at', Date.now() - start);
//     }
// )
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('8:crypto ended at', Date.now() - start);
//     }
// )
// const http = require('node:http');
// const server = http.createServer((req, res) => {
//     console.log('received request');
//     res.end('done');
// });
// server.listen(3000);

// const http = require('node:http');
// const server = http.createServer((req, res) => {
//     // routes
//     const {url, method} = req
//     if (url === '/long' && method === 'GET') {
//         // 1. get users data SELECT id, name, email, pp FROM users WHERE id = 1;
//         // 2. find user >> 100000
//         for (let i = 1; i < 1000000; i++) {
//             // logic of find user
//             console.log(i);
//         }
//         res.end('data from long request');
//     } else if (url === '/short' && method === 'GET') {
//         res.end('data from short request.');
//     }
// });
// server.listen(3000);

const express = require('express');
const app = express();

const parseBody = () => {
    return (req, res, next) => {
        req.on('data', (chunk) => body += chunk);
        req.on('end', () => {
            body = JSON.parse(body);
            req.body = body
            next();
        })
    }
}

app.use(express.json())
app.post('/auth/register', express.json(), (req, res) => {
    console.log(req.body)
    console.log(3);
    res.send('done');
})

// global error handler middleware
app.use((err, req, res, next) => {
    res.send({message: err.message, success: false});
})
app.listen(3000);