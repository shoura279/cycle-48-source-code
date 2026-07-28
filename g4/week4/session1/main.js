// ? module >> file >> js >> functions
// ? types >> local,custom - core,builtin - third party
// ? core >> path -> fs -> events -> streams = http -> create server (app)

// path >> /uploads/users/ka3bora/profile/image123.jpg
// 1. extract >> file name
// 2. extract >> folder
// 3. extract >> ext name >> js >> image >> valid [.jpg , .png , gif , jpeg]
const path = require('node:path');
// dot notation - subscription notation
// // ? problem 1
// const result = path.basename("uploads/users/ka3bora/profile/image123.jpg");
// console.log(result);
// ? implementation of basename
// function basename(filePath) {
//     // filepath >> string >> method >> split(separator)
//     const arrResult = filePath.split('/') // >> [uploads,users ,ka3bora ,profile ,image123.jpg ];
//     return arrResult[arrResult.length - 1];
// }
//
// console.log(basename("uploads/users/ka3bora/profile/image123.jpg"));
// // ? problem 2
// const result = path.dirname("uploads/users/ka3bora/profile/image123.jpg");
// console.log(result);
//
// // ? implementation of dirname
// function dirname(filePath) {
//     // filepath >> string >> method >> split(separator)
//     const arrResult = filePath.split('/') // >> [uploads,users ,ka3bora ,profile ,image123.jpg ];
//     arrResult.pop();// >> [uploads,users ,ka3bora ,profile ];
//     return arrResult.join('/');// uploads/users/ka3bora/profile
// }
//
// console.log(dirname("uploads/users/ka3bora/profile/image123.jpg"));
// // ? problem 3
//
// const result = path.extname('uploads/users/ka3bora/profile/script.png');
// const validExt = ['.jpg', '.png', '.jpeg', '.gif'];
// // result >> .js
// const valid = validExt.includes(result);
// if (!valid) {
//     throw 'Invalid file type';
// }
// // ? magic numbers >> binary >> calculation >> content >> number >> 18 >> js >> 44 >> png
// // console.log(result);
// // function extname(filePath) {
// //     // split(separator)
// //     const result = filePath.split('.');// >> ['uploads/users/ka3bora/profile/image123' , 'jpg']
// //     return '.' + result[result.length - 1];
// // }
// //
// // console.log(extname('uploads/users/ka3bora/profile/image123.jpg'));

// let filePath = 'D:\\route\\c48\\g4';
// let filePath2 = '../../week4/session1';
// // ../ >> back folder
// const result = path.join(filePath, filePath2);
// console.log(filePath + filePath2);
// console.log(result);
// // skip char >> 'n' >> n >> \n >> new line
// // skip char >> 't' >> t >> \t >> tab 4 spaces
// // skip char >> 'r' >> r >> \r >> cursor start from the begging of the file
//
// // ? types of paths
// // ? D:\route\c48\g4\week4\session1\main.js >> absolute >> path with root (base)
// // ? week4/session1/main.js >> relative >> without root (base)
// // ?
// // ?
// // ? 1m >> iterate modify >> 100 * 1m >> down-time
// // ? real server >> https://batats.vercel.com/uploads/ka3bora/profile/image.jpg >> url >> physical address
// // ? database >> [{userName:"ka3bora" , pp: "https://batats.digital-ocean.com/uploads/ka3bora/profile/image.jpg" }]
// // ? database >> [{userName:"ka3bora" , pp: "uploads/ka3bora/profile/image.jpg" }]
// let userName = 'ka3bora';
// let name = 'ka3bora';// hit >> do not use name >> var declared in js
// >> window >> FE
// console.log(name);// BE >> name is not difined
// alert('you are hacked😡');
// console.log(__dirname);
// console.log(__filename);
// let x = 'y/x/z';
// console.log(path.resolve(x));// . ref >> working dir >> project
// // ? fs -> events -> streams -> http >> MDN - w3schol - free code camp
// read file >> js
// flow read file
// open(filePath) >> err >> path not exist >> FD >> file discerptor number >> unique number
// read(fd) >> err , bytes number >> 55 , data >> 01 33 44 56 79 12 34 54 >> buffer
// close(fd) >> err
const fs = require('node:fs');
// ? low level methods
// fs.open(
//     "./week4/session1/data.txt",
//     'r',// r -> read , w -> write , a -> append
//     (err, fd) => {
//         // fail case err > err or err > null
//         // handle fail case
//         if (err) {
//             return console.log(err.message);
//         }
//         // handle success case
//         fs.read(
//             fd,
//             (err, bytesRead, buffer) => {
//                 // fail case >> err not null
//                 if (err) {
//                     return console.log(err.message);
//                 }
//                 // success case
//                 console.log(bytesRead);
//                 console.log(buffer);
//                 fs.close(
//                     fd,
//                     (err) => {
//                         if (err) {
//                             return console.log(err.message);
//                         }
//                     }
//                 )
//             }
//         )
//     }
// )

// ? high level methods >> open >> read >> close
// fs.readFile(
//     './week4/session1/image.jpg',
//     (err, data) => {
//         // handle fail case
//         if (err) {
//             return console.log(err);
//         }
//         // handle success case
//         console.log(data)
//     }
// );

// fs.writeFile(
//     './week4/session1/data-copy.txt',
//     'hello rabe3 ',
//     {flag: "w"},// over write
//     (err) => {
//         if (err) {
//             return console.log(err);
//         }
//     });

// ? steps -> 1. read data from old resource 2. write data to new resource
// fs.readFile(
//     './week4/session1/data.txt',
//     {encoding: "utf-8"},
//     (err, data) => {
//         // handle fail case
//         if (err) {
//             return console.error(err.message);
//         }
//         // handle success
//         fs.writeFile(
//             './week4/session1/data-copy.txt',
//             data,
//             {flag: "w"},
//             (err) => {
//                 if (err) {
//                     return console.error(err.message);
//                 }
//             }
//         );
//     }
// )
// // ? version sync of readFile
// try {
//     const data = fs.readFileSync('./week4/session1/data.txt', {encoding: "utf-8"});// err >> throw err
//     console.log(data);
//     fs.writeFileSync('./week4/session1/data-copy1.txt', data);
// } catch (err) {
//     console.error(err.message, err.stack);
// }
// ? -> events
const {EventEmitter} = require('node:events');
// pascal case >> class
// new Promise();// >> promise >> object
const event = new EventEmitter();


// register
event.on(
    'elakelgeh',
    function (elakel) {
        console.log(elakel);
    }
);
event.on(
    'pepsigeh',
    () => {
        console.log('Pepsigeh');
    })
// console.log(event.eventNames());
// emit

event.emit('pepsigeh');

event.emit(
    'elakelgeh',
    'patates'
);
// events
// streams - http - express