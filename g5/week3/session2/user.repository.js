// repository >> database
let users = []

function createUser(userData) {
    users.push(userData);
    console.log({createdUser: users})
    return users;
}

function updateSpecificUser(id, newData) {
    // ! MODIFY
    users = users.map(
        (user) => {
            if (user.id === id) {
                Object.assign(user, newData);
            }
            return user;
        }
    )
    console.log({updatedUser: users})
    return users;
}

// todo:
function deleteUser(id) {
}

function getUserById(id) {
    const userExist = users.find(
        (user) => {
            if (user.id === id) return true;
        }
    )
    console.log({userExist});
    return userExist;
}

function getUserByEmail(email) {
    const userExist = users.find(
        (user) => {
            if (user.email === email) return true;
        }
    )
    return userExist;
}


module.exports = {
    x: 1,
    y: 2,
    z: 3,
    createUser,// createUser : createUser
    updateUser: updateSpecificUser,
    deleteUser,// deleteUser: deleteUser
    getUserById,// getUserById: getUserById
    getUserByEmail,//getUserByEmail :getUserByEmail
}
