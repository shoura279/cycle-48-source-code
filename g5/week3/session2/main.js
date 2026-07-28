// // modules and its type
// // module >> file >> js >> functions
//
//
// const path = require('node:path');
// const fs = require('node:fs');
// const events = require('node:events');
// const http = require('node:http');// create server
//
// const userRepository = require('./user.repository.js')
// userRepository.createUser({userName: "ka3bora", email: "K@g.com", password: "12345", id: 1})
// // createUser({userName: "ka3bora", email: "K@g.com", password: "12345"});
// // types >> (local - custom)
// // (core - built in)
// // third party
//
//
// userRepository.updateUser(1, {userName: "ka3bora updated"});
//
// userRepository.getUserById(1);
const path = require('path');
console.log(__dirname);
console.log(path.resolve('.'))