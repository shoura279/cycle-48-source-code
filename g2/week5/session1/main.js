// // http -> create server-> update user
// // express -> create app -> middlewares
// const http = require('node:http');
// const fs = require('node:fs/promises');
// const server = http.createServer(async (req, res) => {
//     // routes >> actions >> url + method
//     // const url = req.url;
//     // const method = req.method;
//     const {url, method} = req;
//     // /user GET >> action get user
//     if (url === '/user' && method === "GET") {
//         let data = await fs.readFile('./week5/session1/users.json', {encoding: "utf-8"})
//         data = JSON.parse(data);
//         res.writeHead(200, {'content-type': 'application/json'});
//         res.write(JSON.stringify({
//             message: "done", success: true, data: data
//         }));
//         return res.end();
//     }
//         // /user/1
//         // /user/2
//         // /user/3
//     // /user PUT >> action update user
//     else if (method === "PUT" && url.startsWith('/user')) {
//         const id = url.split('/')[2]// ['' , 'user' ,'3']
//         let body = '';
//         req.on('data', (chunk) => {
//             body += chunk; // chunk1 + chunk2 + chunk3
//         })
//         req.on('end', async () => {
//             // 0. get user data
//             let users = await fs.readFile('./week5/session1/users.json', {encoding: "utf-8"});
//             users = JSON.parse(users);
//             // 1. check user exist by id
//             const idx = users.findIndex((user) => user.id === Number(id));
//             // 2. if no, return send fail response
//             if (idx === -1) {
//                 res.writeHead(404, {'content-type': 'application/json'});
//                 res.write(JSON.stringify({
//                     message: "user not found", success: false
//                 }))
//                 return res.end();
//             }
//             // 3. todo: check email exist
//             body = JSON.parse(body);
//             const emailExist = users.find(user => user.email === body.email);
//             if (emailExist) {
//                 res.writeHead(409, {'content-type': 'application/json'});
//                 res.write(JSON.stringify({
//                     message: "email already exist", success: false
//                 }))
//                 return res.end();
//             }
//             // 4. update user
//             Object.assign(users[idx], JSON.parse(body));
//             // 5. update database (file)
//             await fs.writeFile('./week5/session1/users.json', JSON.stringify(users));
//             // 5. send success response
//             res.writeHead(200, {'content-type': 'application/json'});
//             res.write(JSON.stringify({
//                 message: "user updated successfully",
//                 success: true,
//             }));
//             return res.end();
//         })
//     }
//     // handle invalid routing
// });// server == app
// server.listen(3000)
// express >> third party
// node package manger >> npm
// const express = require('express');
//
// const app = express();
//
// // routes
// app.get('/user', (req, res) => {
//     res.json({message: "done", success: true});// res.writeHead() res.write() res.end()
// });
//
// app.put('/user/:id', (req, res) => {
// })
//
// app.listen(3000);