// types of modules >> [(local,custom) - (core-builtin) - (third-party)]
// path - events - fs - streams - http >> todo: crypto

// ================= path
// const path = require('node:path');
// let resultDB = '/users/ka3bora/pp.js.png';

// // filename >> path.basename()
// console.log(path.basename(resultDB));// pp.jpg
// // dirname >> path.dirname()
// console.log(path.dirname(resultDB));
// // path.extname() : todo: magic - numbers
// console.log(path.extname(resultDB));
//
// console.log(path.parse(resultDB));
// console.log(path.format(path.parse(resultDB)))
// let user = {
//     name: "ka3bora",
//     salary: 300000,
//     get() {
//         console.log('user name', name);
//         console.log('user salary', salary);
//     }
// }
//
// user.get();
// let path1 = 'project/talabat/src';
// let path2 = '..\\..\\modules\\users\\repository';// skip char
// const result = path.join(__dirname, path1, path2);
// const result2 = path.resolve(path1, path2)
// // console.log(result);
// console.log(result2);
// const {EventEmitter} = require('node:events');
// const event = new EventEmitter();
//
// let products = [];
//
// event.on('addNewItem', function (data) {
//     products.push(data);
//     console.log(products);
// })
//
// event.emit('addNewItem', {name: "iPhone 18.5", price: "3K"});
//
// // file >> path >> 'open'
// // open(path) >> emit event 'open'
// // read(path) >> emit event 'data'
// // end() >> emit event end
// // close() >> emit event 'close'

const fs = require('node:fs');

// fs.open('./week4/session1/data.txt', (err, fd) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     fs.read(fd, (err, bytesRead, buffer) => {
//         if (err) return console.log(err.message);
//         console.log(buffer);
//         fs.close(fd, (err) => {
//             if (err) return console.log(err.message);
//             console.log('file is closed')
//         })
//     })
// })
fs.readFile(
    './week4/session1/data.txt',
    {encoding: 'utf-8'},
    (err, data) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(data);
        // logic of code
    }
);
try {
    const data = fs.readFileSync('./week4/session1/data1.txt', {encoding: 'utf8'});
    console.log(data);
} catch (err) {
    console.log(err.message)
}