// // types of modules >> file >> js
// // [(local - custom) , (core - built-in) , third-party]
// // path - fs - events - streams ->>> http -> create app
// const path = require('node:path');
// // how to get file name >> /project/talabat/src/user.js
// // console.log(path.basename(x));
// // // how to get folder/ dir name
// // console.log(path.dirname(x));
// // // how to get ext name file >> image.png >> todo: magic numbers
// // console.log(path.extname(x));
// // // how to parse file
// // console.log(path.parse(x));
// // // how to build path from object
// // console.log(path.format(path.parse(x)));
// // ? types of paths >> relative path - absolute path
// // console.log(path.isAbsolute(x));
// // let x = 'g3/week4/session1/uploads';
// // let y = '../../module/user/repository';
// // let z = '\\node\\table\\remote';// skip char
// // console.log(__dirname);
// // console.log(path.resolve('.', '../', x));
// // console.log(z)
// // D:\route\c48\g3\week4\session1\main.js
// // http://dawagenOnline.com\week4\session1\uploads/image1.png
// // g3/week4/session1/main.js
//
// // URL >> location of resource
// let userName = 'ka3bora'
// // console.log(name);
// // let name = 'ka3bora'
// // console.log(__dirname);
// // console.log(__filename);

// ===== fs
const fs = require('node:fs')
// fs.open(
//     './week4/session1/data1.txt',
//     (err, fd) => {
//         if (err) return console.log(err.message);
//         // logic of code
//         fs.read(
//             fd,
//             (err, bytesRead, buffer) => {
//                 if (err) return console.log(err.message);
//                 console.log(buffer);
//                 fs.close(fd, (err) => {
//                     if (err) return console.log(err.message);
//                 })
//             }
//         )
//     });
// fs.readFile(
//     './week4/session1/data.txt',
//     {encoding: 'utf-8'},
//     (err, data) => {
//         if (err) return console.log(err.message);
//         console.log(data)
//     }
// )
// const data = fs.readFileSync('./week4/session1/data.txt');
// console.log(data);
// fs.writeFile(
//     './week4/session1/data-copy.txt',
//     'hello world!',
//     {flag: "a"},
//     (err) => {
//         if (err) return console.log(err.message);
//     }
// );
// try {
//     let data = fs.readFileSync('./week4/session1/data.json', {encoding: 'utf8'})
//     data = JSON.parse(data);
//     data.push({userName: "rabe3", salary: 50000});
//     data.push({userName: "3laamedany", salary: 5000000});
//     fs.writeFileSync('./week4/session1/data-copy.json', JSON.stringify(data), {flag: "a"})
// } catch (err) {
//     console.log(err.message);
// }
const {EventEmitter} = require('node:events');
const event = new EventEmitter();

function x(el2kel) {
    console.log(el2kel);
}

// register
event.on('el2kelgeh', x);
// emit
event.emit('el2kelgeh', );
event.emit('el2kelgeh', );
