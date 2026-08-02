// // http -> create server -> update user + get user
// // express -> create app
//
// const http = require('node:http');
// const fs = require('node:fs/promises');
// const server = http.createServer(async (req, res) => {
//     // routes >> url + method
//     // const url = req.url;
//     // const method = req.method;
//     const {url, method} = req
//     // get users
//     if (url === '/user' && method === "GET") {
//         // 1. get data from DB (file)
//         let data = await fs.readFile('./week5/session1/users.json', {encoding: "utf-8"});
//         data = JSON.parse(data);
//         // 2. send response with data
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.write(JSON.stringify({
//             message: "done", success: true, data: data
//         }));
//         return res.end();
//     }
//         // update user
//         // /user/1
//         // /user/2
//     // /user/3
//     else if (method === 'PUT' && url.startsWith('/user')) {
//         const id = url.split('/')[2]// ['',"user",'1']
//         let body = ''
//         req.on('data', (chunk) => {
//             body += chunk;// ch1,ch2, ch3 ...
//         });
//         req.on('end', async () => {
//             // 0. get user from DB (file)
//             let users = await fs.readFile('./week5/session1/users.json', {encoding: "utf-8"})
//             users = JSON.parse(users);
//             body = JSON.parse(body);
//             // 1. check user exist by id
//             const userExist = users.find((user) => user.id === Number(id));
//             // 2. if no, return send fail response
//             if (!userExist) {
//                 res.writeHead(404, {"Content-Type": "application/json"});
//                 res.write(JSON.stringify({
//                     message: "user not found", success: false,
//                 }));
//                 return res.end()
//             }
//             // 3. todo: check email exists
//             const [emailExist] = users.filter(
//                 (user) =>
//                     user.email === body.email && user.id !== Number(id)
//             )
//             console.log(emailExist);
//             if (emailExist) {
//                 res.writeHead(409, {"Content-Type": "application/json"});
//                 res.write(JSON.stringify({
//                     message: "email already exist", success: false
//                 }));
//                 return res.end()
//             }
//             // 4. update user
//             Object.assign(userExist, body);
//             await fs.writeFile('./week5/session1/users.json', JSON.stringify(users));
//             // 5. send success response
//             res.writeHead(200, {"Content-Type": "application/json"});
//             res.write(JSON.stringify({
//                 message: "user updated successfully", success: true
//             }));
//             return res.end()
//         })
//     }
// });// server == app
// server.listen(3000);
// express >> third party
// node package manger >>

const express = require('express');
const fs = require("node:fs/promises");
const path = require("node:path");
const app = express();
// routes >> url , method
app.get('/user', async (req, res) => {
    let data = await fs.readFile('./users.json', {encoding: 'utf-8'})
    data = JSON.parse(data);
    res.status(201).json({message: "done", success: true, data: data});
});

app.put('/user', (req, res) => {
    res.sendFile(path.resolve('./users.json'))
})
app.listen(3000);

// todo: router - middlewares