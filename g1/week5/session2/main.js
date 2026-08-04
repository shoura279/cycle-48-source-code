// // ? operations run on libuv >> [thread pool]
//
// // const crypto = require('node:crypto');
// // const start = Date.now();
// //
// // crypto.pbkdf2('12345', 'b', 100000, 512, 'sha512', (err, derivedKey) => {
// //     console.log('1:crypto ended after', Date.now() - start);
// // });
// //
// // crypto.pbkdf2('12345', 'b', 100000, 512, 'sha512', (err, derivedKey) => {
// //     console.log('2:crypto ended after', Date.now() - start);
// // });
// //
// // crypto.pbkdf2('12345', 'b', 100000, 512, 'sha512', (err, derivedKey) => {
// //     console.log('3:crypto ended after', Date.now() - start);
// // });
// //
// // crypto.pbkdf2('12345', 'b', 100000, 512, 'sha512', (err, derivedKey) => {
// //     console.log('4:crypto ended after', Date.now() - start);
// // });
// // crypto.pbkdf2('12345', 'b', 100000, 512, 'sha512', (err, derivedKey) => {
// //     console.log('5:crypto ended after', Date.now() - start);
// // });
// //
// // crypto.pbkdf2('12345', 'b', 100000, 512, 'sha512', (err, derivedKey) => {
// //     console.log('6:crypto ended after', Date.now() - start);
// // });
// // crypto.pbkdf2('12345', 'b', 100000, 512, 'sha512', (err, derivedKey) => {
// //     console.log('7:crypto ended after', Date.now() - start);
// // });
// // crypto.pbkdf2('12345', 'b', 100000, 512, 'sha512', (err, derivedKey) => {
// //     console.log('8:crypto ended after', Date.now() - start);
// // });
//
// // service >> 5 operations >> set threadpool = 5
// // offload service >> operation >> DB
// // request >>
// // ? operations run on OS
// // const http = require('node:http');
// // // networking >> OS
// // // send request
// // const server = http.createServer((req, res) => {
// //     console.log('receive request...');
// //     res.end('done');
// // });
// // server.listen(3000);
//
// // ? operations run on Main thread
// const http = require('node:http');
// const fs = require('node:fs');
// const server = http.createServer((req, res) => {
//     const {url, method} = req;
//     if (url === '/long' && method === "GET") {
//         const data =
//             fs.readFileSync('./week5/session2/users1.txt');
//         res.write(data);
//         res.end();
//     } else if (url === '/short' && method === 'GET') {
//         res.end('short request is ended.')
//     }
// });
// server.listen(3000);

// ? part-2 -> express
const express = require('express');
const fs = require('node:fs/promises');
const crypto = require('node:crypto');
const app = express();

// built in middleware -> parsing req [body]
app.use(express.json()); // req.on('data',chunks) >> body >> parsing >> js obj
// app.use(['/auth/register', '/auth/login', '/auth/forget-password'],(req,res,next)=>{next();})

// routes
app.get('/user', async (req, res) => {
    let data = await fs.readFile('./users.json', {encoding: "utf-8"});
    data = JSON.parse(data);
    res.send({
        message: "done", success: true, data: data
    });
});
let validateBody = () => {
    return (req, res, next) => {
        console.log(0);

        // " ahmed " >> "ahmed" >>truthy value >> ' '  >> falsy >>''
        if (!req.body.email?.trim()) {
            throw new Error('email must be provided.', {cause: 400});
        }
        if (!req.body.userName?.trim()) {
            throw new Error('userName must be provided.', {cause: 400});
        }
        if (!req.body.password?.trim()) {
            throw new Error('password must be provider.', {cause: 400})
        }
        return next();
    }
}
app.post('/auth/register',
    validateBody(),
    (req, res, next) => {
        console.log(1);
        return next();
    },
    (req, res, next) => {
        console.log(2);
        return next();
    },
    async (req, res) => {
        // 1. check user email exist
        // 1.1 get users [readFile]
        let users = await fs.readFile('./users.json', {encoding: "utf-8"});
        users = JSON.parse(users);
        // 1.2 check existence
        const userEmailExist = users.find((user) => user.email === req.body.email)
        // 2. if yes , return fail response user already exist
        if (userEmailExist) {
            throw new Error('user already exists.', {cause: 409});// 409 -> conflict // server terminate;
        }
        // prepare body
        req.body.id = crypto.randomInt(9999);// 0.34435432657 - 0.4363257537 - 0 >> 1.4363257537 >> 143.3254879
        // 3. add user to users.json file
        users.push(req.body);
        await fs.writeFile('./users.json', JSON.stringify(users));
        // 4. send success response
        res.status(201).json({
            message: " user created successfully.", success: true, data: req.body
        })
    }
)

// global error handler middleware
app.use(
    (error, _req, res, _next) => {
        res.status(error.cause || 500)
            .json({
                message: error.message, success: false, stack: error.stack
            })
    }
);
app.listen(3000);