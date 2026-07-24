let users = [];

function createUser(userData) {
    users.push(userData);
    return users;
}

function getUserById(id) {
    const user = users.find(
        (user) => {
            return user.id === id
        }
    )
    return user;
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
    return users;
}

function deleteUser(id) {
    const index = users.findIndex((user) => user.id === id)
    users = users.splice(index, 1);
    return users;
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    hamada: 'hambozo'
}