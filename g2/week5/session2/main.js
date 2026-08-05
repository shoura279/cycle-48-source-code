// const http = require('node:http');
//
// const server = http.createServer(
//     (req, res) => {
//         console.log('receive req...');
//         res.end('done');
//     }
// );
// server.listen(3000);
// const crypto = require('node:crypto');
// const start = Date.now();
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//     console.log('1:crypto ended at', Date.now() - start);
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     console.log('2:crypto ended at', Date.now() - start);
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     console.log('3:crypto ended at', Date.now() - start);
// });
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     console.log('4:crypto ended at', Date.now() - start);
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     console.log('5:crypto ended at', Date.now() - start);
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     console.log('6:crypto ended at', Date.now() - start);
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     console.log('7:crypto ended at', Date.now() - start);
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     console.log('8:crypto ended at', Date.now() - start);
// });
// const http = require("node:http");
//
// const server = http.createServer((req, res) => {
//     const {url, method} = req;
//     if (url === '/long' && method === 'GET') {
//         // 1. get all users >> select * from users WHERE id = 1;
//         // 2. loop of 100000
//         for (let i = 0; i < 100000; i++) {
//             console.log(i);// logic search user
//         }
//         res.end('request long ended');
//     } else if (url === '/short' && method === 'GET') {
//         res.end('request short ended');
//     }
// })
// server.listen(3000)
// npm i express >> project
const express = require("express");
const app = express();

app.use(express.json());


app.post('/auth/register', (req, res, next) => {
    if (!req.body.email) {
        // throw new Error("Email is required"); .. express 5
        // next(new Error('Email is required')); .. express 4 5
        // return res.send({message:"email must be provided" ,success:false});
    }
    if (!req.body.phone) {
        next(new Error('Phone is required'));
        // return res.send({message:"phone must be provided" ,success:false})
    }
    if (!req.body.password) {
        next(new Error('Password is required'));
        // return res.send({message:"password must be provided" ,success:false})
    }
})

app.put('/user/:id', () => {
})
app.delete('/user/:id', () => {
})


app.post('/post', express.json(), () => {
})
// global error handler middleware
app.use((err, req, res, next) => {
    res.send({message: err.message, success: false});
})

app.listen(3000);