// repository -> database -> data source
// implementations
let users = [];

function getUserById(id) {
    const userExist = users.find((user) => {
        if (user.id === id) return true;
    });
    return ['done', userExist];
}

function getUserByEmail(email) {
    const userExist = users.find((user) => {
        if (user.email === email) return true
    })
    return ['done', userExist];
}

function getUsers(condition) {

    return users.filter(user => {
        if (condition) return true
    })
}

function createUser(userData) {
    // insert into users userNama , email , password values ka3bora , k@g.com , 12345
    users.push(userData);
    return ['done', users];// response from database
}

function updateUser(id, newUserData) {
    // update users set newUserData where userId = id;
    // how to modify into array
    // new array
    // [{},{},{},{}]
    users = users.map((user) => {
        if (user.id === id) {
            Object.assign(user, newUserData);
        }
        return user;
    });
    return ['done', users];
}

function deleteUser(id) {
}

module.exports = {
    x: 1,
    y: 2,
    z: 3,
    createUser,
    updateUser: updateUser,
    removeUser: deleteUser,
    getUserById: getUserById,
    getUserByEmail: getUserByEmail,
    getUsers: getUsers,
}