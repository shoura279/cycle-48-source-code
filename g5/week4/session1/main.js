// core-modules -> builtin
// ? path -> fs -> events -> streams -> http -> create app -> next session
// ? filePath = '/uploads/users/ka3bora/profile/image123.jpg'
// const path = require('node:path')

// // ? problem 1: how to extract file name from path >> image123.jpg
//
// function basename(filePath) {
//     // filePath.split(separator) >> ['', 'uploads','users','ka3bora','profile','image123.jpg']
//     const arrResult = filePath.split('/');
//     return arrResult[arrResult.length - 1];
// }
//
// console.log(basename("/uploads/users/ka3bora/profile/image123.jpg"));
// console.log(path.basename("/uploads/users/ka3bora/profile/image123.jpg"))
// // ? problem 2: how to extract folder name from path >> /uploads/users/ka3bora/profile
// function dirname(filePath) {
//     // 1. split >> / >> ['', 'uploads','users','ka3bora','profile','image123.jpg']
//     const result = filePath.split('/');
//     // 2. remove last ele >> ['', 'uploads','users','ka3bora','profile']
//     result.pop()
//     // 3. join all ele by /uploads/users/ka3bora/profile
//     return result.join('/');
// }
//
// console.log(dirname("/uploads/users/ka3bora/profile/image123.jpg"))
//
//
// console.log(path.dirname("/uploads/users/ka3bora/profile/image123.jpg"));

// // ? problem 3: how to extract ext name from path >> .jpg
// function extname(filePath) {
//
//     // "/uploads/users/ka3b.ora/profile/image123.jpg"
//     // 1. split by "."
//     const result = filePath.split('.');
//     // GET last ele and return
//     return '.' + result[result.length - 1]
// }
//
// console.log(extname("/uploads/use.rs/kah.3bora/pro.file/im.age123.jpg"));
// console.log(path.extname("/uploads/use.rs/kah.3bora/pro.file/im.age123.jpg"));

// let filePath = 'D:\\route\\c48\\g5'; // ../ back from folder
// let filePath2 = '../../week4/session1'// skip char >> "n" -> n >> \n >> new line , 't' -> t >> \t >> tab 4 spaces
// console.log(filePath + filePath2);// /users/patates
// console.log(path.join(filePath, filePath2));//
//
// let userName = 'ka3bora';
// let name = 'ka3bora';
// console.log(name);// window
// alert('you are hacked!')
// // ? name -> __dirname
// console.log(__dirname);
// console.log(path.resolve()); // "." >> working dir >> project >> terminal
// types of paths
// absolute >> D:/route/c48/g5/week4/session1/main.js >> root >> base from OS
// relative >> /g5/week4/session1/main.js
// console.log(path.isAbsolute("/g5/week4/session1/image.jpg"));

// BE -> server === g5 -> uploads/users/ka3bora/profile/image.jpg
// server >> aws - digital-ocean - azure

// DB -> server >> users ->
// downtime >>
// [
//      {userName:"ka3bora",    pp:"https://app.digital-ocean.com\uploads\users\ka3bora\profile\image.jpg"},
//      {userName:"rabe3",      pp:"https://app.digital-ocean.com\uploads\users\rabe3\profile\image.jpg"},
//      {userName:"3laamedany", pp:"https://app.digital-ocean.com\uploads\users\3laamedany\profiel\image.jpg"}
// ]


// DB -> server >> users ->
// [
//      {userName:"ka3bora",    pp:"uploads\users\ka3bora\profile\image.jpg"},
//      {userName:"rabe3",      pp:"uploads\users\rabe3\profile\image.jpg"},
//      {userName:"3laamedany", pp:"uploads\users\3laamedany\profiel\image.jpg"}
// ]

// let filePath = 'uploads/users/ka3bora/image.jpg';
// console.log(path.join(__dirname, '../../', filePath));
// console.log(path.resolve('.', filePath));

// ? fs -> events -> streams -> http
// ? fs >> read - write file
// ? open(path) >> ref - ram
// ? action >> read(file) - write(file)  err >> no such file or dir open >> path
// ? close(file)
// const fs = require('node:fs');
// ? low level methods
// fs.open(
//     './week4/session1/data.txt',
//     (err, fd) => {// fd >> file discerptor >> unique number ref file in ram >> 22
//         // handle fail cases
//         if (err) {
//             return console.log(err);
//         }
//         // handle success cases
//         fs.read(
//             fd,
//             (err, bytesRead, buffer) => {
//                 // handle fail cases
//                 if (err) {
//                     return console.log(err);
//                 }
//                 // handle success cases
//                 console.log(bytesRead);
//                 console.log(buffer);
//                 fs.close(fd);
//             }
//         )
//     }
// )
// ? high level methods
// fs.readFile(
//     './week4/session1/data1.txt',
//     (err, data) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         // handle success case
//         console.log(data)
//     })
//
// fs.writeFile(
//     './week4/session1/data-copy.txt',
//     "hello rabe3",
//     {flag: "w"},
//     (err) => {
//         if (err) {
//             return console.error(err.message);
//         }
//     })
// ? read data from file one then write data to a new file

// fs.readFile(
//     './week4/session1/data.txt',
//     (err, data) => {
//         // handle fail cases
//         if (err) {
//             return console.error(err.message);
//         }
//         // handle success cases
//         fs.writeFile(
//             './week4/session1/data-copy.txt',
//             data,
//             (err) => {
//                 if (err) {
//                     return console.log(err.message);
//                 }
//             }
//         )
//     }
// )

// try {
//     // w >> write
//     // r >> read
//     // a >> append
//     const data = fs.readFileSync('./week4/session1/data.txt', {encoding: "utf-8"});
//     console.log(data)// throw error
//     fs.writeFileSync('./week4/session1/data-copy.txt', JSON.stringify([1, 2, 3]), {flag: "w"});
// } catch (err) {
//     console.error(err);
// }

// ? events >> register - emit
const {EventEmitter} = require('node:events');
// pascal case >> class
// new Promise() >> promise >> object
const event = new EventEmitter();// eventEmitter >> object

// how to register ?
event.on(
    "ay7aga",
    () => {
        console.log("ay7aga");
    }
);

// console.log(event.eventNames());
// how to emit?
event.emit('ay7aga');
