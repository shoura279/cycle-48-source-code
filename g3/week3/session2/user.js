let users = [];// data source

function createUser(data) {
    users.push(data);
    console.log(users);
    return users;
}

function getUserById(id) {
    // id -> 1
    const userExist = users.find(
        (user) => {
            return user.id === id;
        }
    );
    console.log(userExist);
    return userExist;
}

function updateUser(id, newData) {
    users = users.map(
        (user) => {
            if (user.id === id) {
                Object.assign(user, newData);
            }
            return user;
        }
    )
    console.log(users)
}

// todo : search point
// function deleteUser(id) {
//
// }

module.exports = {
    ka3bora: "rabe3",
    createUser,
    getUserById,
    updateUser,
};