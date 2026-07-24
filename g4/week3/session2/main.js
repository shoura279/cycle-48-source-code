// modules >> file >> js >> functions
const path = require('node:path');
const fs = require('node:fs');
const events = require('node:events');
const http = require('node:http');

const userRepository = require('./user.repository.js');

const [message, users] = userRepository.createUser({
    id: 1, userName: "ka3bora", email: "k@g.com", password: "123456",
});

console.log(users);

const [message2, updatedUsers] = userRepository.updateUser(1, {userName: "ka3bora updated"})
console.log(updatedUsers);

const [message3, user] = userRepository.getUserById(1);
console.log(user);

// ? types of modules[ (local, custom) - (core - built-in) - (third-party)]