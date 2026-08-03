// file >> js >> functions >> mange >> users >> into DB
// top level exported function
// exported by default


module.exports.updateUser = function updateUser() {
    console.log('updating user...');
}

module.exports.deleteUser = function deleteUser() {
    console.log('deleting user...');
}
// module.exports = {
// findUser:function}
module.exports.findUser = function findUser() {
    console.log('finding user...');
}

module.exports = function createUser() {
    console.log('creating user...');
}
// module.exports = {
//     createUser,
//     updateUser,
//     deleteUser,
//     findUser,
// }