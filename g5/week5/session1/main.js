// ? http    -> create server >> get users - update user
// ? local modules
// ? third party modules
// ? express -> create application
//
// const http = require('node:http');
// const fs = require('node:fs/promises');

// const server = http.createServer(requestHandler);// server BE >> app

// async function requestHandler(req, res) {
// // routes >> url + method
//     const {method, url} = req;
//     if (url === '/user' && method === 'GET') {
//         // 1. get users data from DB -> users.json file
//         let data = await fs.readFile('./week5/session1/users.json', {encoding: "utf-8"});
//         data = JSON.parse(data);
//         // 2. send success response
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.write(JSON.stringify({message: "done", success: true, data: data}));
//         res.end();
//     }
//     // /user/1 - /user/2 - /user/3 - /user/4
//     else if (url.startsWith('/user') && method === 'PUT') {
//         // body >> chunks
//         let body = ''
//         req.on('data', (chunk) => body += chunk);
//         req.on('end', async () => {
//             // logic of update
//             // 0. parse req body
//             body = JSON.parse(body);
//             // 1. get user id from url "/user/1" >> get id
//             let id = Number(url.split('/')[2]);// >> ['','user','1']
//             // 2. check user id existence
//             // 2.1 get users from DB [file]
//             let users = await fs.readFile('./week5/session1/users.json', {encoding: 'utf-8'});
//             users = JSON.parse(users);
//             // 2.2 check exist
//             const userExist = users.find((user) => user.id === id);
//             // 3. if no , return send fail response >> user not found
//             if (!userExist) {
//                 res.writeHead(404, {'Content-Type': 'application/json'});
//                 res.write(JSON.stringify({message: "user not found.", success: false}));
//                 return res.end(); // end stream - FE >> res ❌
//             }
//             // 3.1 check email exist
//             const userEmailExist = users.find((user) => user.email === body.email);
//             // if yes , return send fail response
//             if (userEmailExist) {
//                 // 409 -> conflict
//                 res.writeHead(409, {'Content-Type': 'application/json'});
//                 res.write(JSON.stringify({message: "email already exist.", success: false}));
//                 return res.end();
//             }
//             // 4. update user into file
//             Object.assign(userExist, body);// {userName,email , password , phoneNumber} + {userName}
//             await fs.writeFile('./week5/session1/users.json', JSON.stringify(users));
//             // 5. send success response
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.write(JSON.stringify({message: "user updated successfully.", success: true}));
//             res.end();
//         })
//     }
// }
//
// server.listen(3000);

// const userRepository = require('./user.repository.js');
// console.log(userRepository);
// userRepository();// call >> top exported function >> create user
// userRepository.findUser()
// userRepository.deleteUser()
// userRepository.updateUser()

// shoura >> file >> implementation >> Github
//       omar               adly
//          >> sagda            >> mariam
//          >> saleh            >> sagda
//                  >> ossama
//                           >> adly
// node package manger >> npm >> npm install shoura
// download node >> npm
// =================================== framework
const path = require('node:path');
const express = require('express');
const fs = require("node:fs/promises");
const app = express();// call createApp

// app = server http + functionalities >> utils functions >>
// routes /user GET

app.get('/user', async (req, res) => {
    // res.writeHead(200, {"content-type": "application/json"});
    // res.write(JSON.stringify({message: "done", success: true}));
    // res.end();
    // res.sendFile(path.resolve('./users.json'));
    let data = await fs.readFile('./users.json', {encoding: "utf-8"});
    data = JSON.parse(data);
    res.json({message: "done", success: true, data: data});// json
});
// middlewares for parsing req body
app.use(express.json()); // combine chunks + parse >> object
// fit >> /user/1 , /user/2 , /user/hamada
app.put('/user/:id', (req, res) => {
    // body >> chunks
    console.log(req.body);
    // const id = Number(req.url.split('/')[2])
    const id = req.params.id
    res.json({message: "user updated successfully", success: true});
});

app.listen(3000);
// node-internals + express
// database
//
