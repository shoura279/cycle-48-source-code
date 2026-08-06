// const crypto = require('node:crypto');
// const start = Date.now();// 1
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     const end = Date.now();
//     console.log('1:crypto ended at', end - start)
// });
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     const end = Date.now();
//     console.log('2:crypto ended at', end - start);
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     const end = Date.now();
//     console.log('3:crypto ended at', end - start)
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     const end = Date.now();
//     console.log('4:crypto ended at', end - start)
// });
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     const end = Date.now();
//     console.log('5:crypto ended at', end - start)
// });
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     const end = Date.now();
//     console.log('6:crypto ended at', end - start)
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     const end = Date.now();
//     console.log('7:crypto ended at', end - start)
// });
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512', (err, derivedKey) => {
//     const end = Date.now();
//     console.log('8:crypto ended at', end - start)
// });

// const http = require('node:http');
// // hash - hashSync
// const server = http.createServer(
//     (req, res) => {
//         const {url, method} = req
//         if (url === '/long' && method === "GET") {
//             // get user data
//             // 1. SELECT id , name , email FROM users; >> [users] >> 1M >> BE >> iterate >> get specific
//             for (let i = 0; i < 1000000; i++) {
//                 // logic for find user
//                 // if(user.id === id) send response with user data
//                 console.log(i);
//             }
//             res.end('long request ended.')
//             // 2. SELECT id , name , email FROM users WHERE id = 1; >> user >> iterate users >> DB server
//         } else if (url === '/short' && method === "GET") {
//             res.end('short request ended.');
//         }
//     }
// );
// server.listen(3000);

const express = require('express');
const app = express();// createdApp()
// const x = () => {
//     return (req, res, next) => {
//         let body = '';
//         req.on('data', (chunk) => body += chunk);
//         req.on('end', () => {
//             body = JSON.parse(body);
//             req.body = body;
//             next();
//         })
//     };
// }
// create product
app.post('/product', express.json(),
    (req, res, next) => {
        let token = 'token';// get from FE
        if (!token) {
            // fail case
            // next(data) -> special -> (err,req,res,next)=>{}
            return next(new Error('token is required'));// next() -> middleware (req,res,next)
            // return res.send({message: "you are not authorized", success: false, stack});

        }
        next();
    },
    (req, res, next) => {
        // determine if go on -> next();
        // send fail response
        let role = 'user';
        if (role === 'user') {
            // fail case
            return next(new Error('you are not authorized'));
            // return res.send({message: "you are not authorized", success: false, stack});
        }
        next();
    },
    (req, res) => {
        console.log(req.body);
        res.send({message: "product created successfully.", success: true});
    }
);


app.use((err, req, res, next) => {
    return res.send({message: err.message, success: false, stack: err.stack});
})


app.listen(8000);