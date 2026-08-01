// //? http -> update - delete
// //? express -> create app -> middleware
// const http = require('node:http');
// const fs = require('node:fs/promises');
// // routes >> url + method
// const server = http.createServer(async (req, res) => {
//     const {url, method} = req
//     console.log({url, method})
//     if (url === '/user' && method === "GET") {
//         // 1. get data from users file -> database
//         let data = await fs.readFile('./week5/session1/users.json', {encoding: "utf-8"});
//         data = JSON.parse(data);
//         // 2. send response
//         res.writeHead(200, {"Content-Type": 'application/json', hamada: "hamo"});
//         res.write(JSON.stringify({message: "done", success: true, data: data}));
//         res.end();
//     }
//     // /user/2
//     else if (method === "PUT" && url.startsWith('/user')) {
//         // "/user/1" >>
//         let id = url.split('/')[2]// >> ['',"user" , '1']
//         id = Number(id);
//         // 1. get data from req
//         let body = ''
//         req.on('data', function (chunk) {
//             body += chunk;
//         });
//         req.on('end', async function () {
//             // 1. check user exist
//             body = JSON.parse(body);
//             let users = await fs.readFile('./week5/session1/users.json', {encoding: 'utf-8'})
//             users = JSON.parse(users);
//             const userIdx = users.findIndex((user) => user.id === id)
//             // 2. if no , send fail response not found
//             if (userIdx === -1) {
//                 res.writeHead(404, {'Content-Type': 'application/json'});
//                 res.write(JSON.stringify({message: "user not found", success: false}));
//                 return res.end();
//             }
//             // 3. check email exist
//             // 3. update user
//             Object.assign(users[userIdx], body);
//             await fs.writeFile('./week5/session1/users.json', JSON.stringify(users));
//             // 4. send success response
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.write(JSON.stringify({message: "user updated successfully", success: true, data: users[userIdx]}));
//             res.end();
//         })
//     } else {
//         res.writeHead(404, {"Content-Type": 'application/json'})
//         res.write(JSON.stringify({"message": "url or method not found.", "success": false}));
//         res.end();
//     }
// });
//
// server.listen(3000, () => {
//     console.log('server is running on port 3000');
// });
// third party module >> file >> js >> functions >> NPM >> shoura
const express = require('express');

const app = express();

// routes >> url - method
app.get('/user', (req, res) => {

    res.send({message: "done", success: true});
});

app.put('/user/:id', (req, res) => {
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

