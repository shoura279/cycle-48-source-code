// // http    -> create server -> get users -> update user
// const http = require('node:http');
// const fs = require('node:fs/promises');
// // readFile >> async
// // readFileSync >> sync
// // readFile >> return promise
// const server = http.createServer(handleRequest);// server >> BE >> app
//
// async function handleRequest(req, res) {
//     // routes >> method - url
//     const {method, url} = req;
//     if (url === '/user' && method === 'GET') {
//         // 1. get users from DB >> [file]
//         let data = await fs.readFile('./week5/session1/users.json', {encoding: "utf-8"})
//         data = JSON.parse(data);
//         // 2. send success response
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.write(JSON.stringify({message: 'done', success: true, data: data}));
//         res.end();
//     } else if (url.startsWith('/user') && method === 'PUT') {
//         let body = '';
//         req.on('data', (chunk) => body += chunk);// * 50
//         req.on('end', async () => {
//             // 1. parsing body
//             body = JSON.parse(body);
//             delete body.id // remove id from req.body
//             // 2. get user id from url -> '/user/6' >>  url.split('/') >> ['','user','6']
//             let id = Number(url.split('/')[2])
//             // 3. check user id exist
//             // 3.1 get users from file
//             let users = await fs.readFile('./week5/session1/users.json', {encoding: "utf-8"});// "[{},{}]"
//             users = JSON.parse(users);// [{},{}]
//             // 3.2 check user exist
//             const userExist = users.find((user) => user.id === id);
//             // 4.1 if not exist , return send fail response [user not found]
//             if (!userExist) {
//                 res.writeHead(404, {'Content-Type': 'application/json'});
//                 res.write(JSON.stringify({message: "user not exist", success: false}));
//                 return res.end()
//             }
//             // 4.2 check email not exist
//             const emailExist = users.find((user) => user.email === body.email)
//             if (emailExist) {
//                 // 409 -> conflict
//                 res.writeHead(409, {'Content-Type': 'application/json'});
//                 res.write(JSON.stringify({message: "email already exist", success: false}));
//                 return res.end()
//             }
//             // 5. update user into file
//             Object.assign(userExist, body); // {userName, email , password} + {userName} -> {userName, email , password}
//             await fs.writeFile('./week5/session1/users.json', JSON.stringify(users))
//             // 6. send success response
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.write(JSON.stringify({message: "user updated successfully", success: true}));
//             res.end()
//         })
//     } else if (url === '/user' && method === 'POST') {
//
//     }
// }
//
// server.listen(3000)
// local modules
// third party modules >> joo file >> function >> upload on github
// node package manger >> npm >> manage modules >> joo >> install all modules
// joo ->
//      doaa         fady
//         >> aya        >> mostafa
//         >> khaled     >> aya

// express -> create app    -> express vs http -> middlewares

const express = require('express');
const path = require('node:path');
const fs = require('node:fs/promises');
const app = express();

app.get('/user', async (req, res) => {
    let data = await fs.readFile('./users.json', {encoding: "utf-8"})
    data = JSON.parse(data);
    res.status(55).json({message: "done", success: true, data: data})
});

app.put('/user/:id', (req, res) => {
});

app.listen(3000, () => {
    console.log('application is running on port 3000');
});
// app -> server http + functions >> functionalities