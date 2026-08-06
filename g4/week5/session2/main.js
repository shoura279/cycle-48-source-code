// const crypto = require('node:crypto');
//
// const start = Date.now();// 1:00
//
// // hash
// // hashSync -> Main -> block
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('1:crypto ended at', Date.now() - start);// 1
//     }
// );
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('2:crypto ended at', Date.now() - start);// 1
//     }
// );
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('3:crypto ended at', Date.now() - start);// 1
//     }
// );
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('4:crypto ended at', Date.now() - start);// 1
//     }
// );
//
//
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('5:crypto ended at', Date.now() - start);// 1
//     }
// );
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('6:crypto ended at', Date.now() - start);// 1
//     }
// );
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('7:crypto ended at', Date.now() - start);// 1
//     }
// );
// crypto.pbkdf2('12345', 'a', 100000, 512, 'sha512',
//     (err, derivedKey) => {
//         console.log('8:crypto ended at', Date.now() - start);// 1
//     }
// );

// const http = require('node:http');
//
// const server = http.createServer(
//     (req, res) => {
//         console.log('receive request...');
//         res.end('ok');
//     }
// );
// server.listen(8000);// listen Main -> thread OS handle req

//
// const http = require('http')
// const server = http.createServer(
//     (req, res) => {
//         // routes >> url , method
//         const {url, method} = req
//         if (url === '/long' && method === 'GET') {
//             // logic waste time
//             // get profile from DB
//             // 1. get all users find >> 1000000 >> worst case
//             // SELECT id, name , email FROM users; >> [] loop find specific user >> loop BE server
//             for (let i = 0; i < 1000000; i++) {
//                 // check user
//                 console.log(i);
//                 // user >> 1000000
//                 // if(user == search User)return
//             }
//             res.end('long request ended');
//             // 2. get specific user from DB >>
//             // SELECT id, name , email FROM users where id = 1; loop >> DB server
//         } else if (url === '/short' && method === "GET") {
//             // logic did not waste time
//             res.end('short request ended')
//         }
//     }
// )
// server.listen(3000);

const express = require('express');
const app = express();
// routes
// url - method
// create product
// const x = () => {
//     return (req, res, next) => {
//         let body = ''
//         req.on('data', (chunk) => body += chunk);
//         req.on('end', () => {
//             body = JSON.parse(body);
//             req.body = body;
//             next();
//         });
//     };
// };
app.post('/product',
    express.json(),
    (req, res) => {
        console.log(req.body);
        // some logic
        res.send({message: "create product successfully.", success: true});
    })
app.listen(8000);