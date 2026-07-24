// callbacks - promises
// todo: p1 >> update user >> - check user exist then update user
// todo: p2 >> delete user >> - check user exist then delete user
// todo: p3 >> get profile >> - get user data


// // ===================== database functions
// function getUserDataFromDB(cb) {
//
//     // query >> select email , password, userName from users where userId = 1000000; >> 1s >> 3s
//     setTimeout(function () {
//         // get data from DB
//         let userData = {
//             userName: "ka3bora", password: "12345", email: "k@g.com"
//         }
//         console.log(userData);
//         if (typeof cb === 'function') cb();// 0() // action [delete - update - no action - order - checkout - create post - create comment - like - reel - any action]
//     }, 3000);
// }
//
// function updateUserIntoDB(cb) {
//     // query >> update users set userName = 'rabe3' where userId = 2;
//     setTimeout(function () {
//             // get new data from DB
//             let newData = {userName: "rabe3", email: "k@g.com", password: "12345"};
//             console.log(newData)
//             if (typeof cb === 'function') cb();
//         }, 2000 // time >> at least time
//     );
// }
//
// // ====================== business layer
// function updateUserFE() {
//     // 1. check user exist
//     getUserDataFromDB(
//         () => {
//             updateUserIntoDB(
//                 () => {
//                     console.log('done')
//                 }
//             )
//         }
//     );// 3000
//
// }
//
// function deleteUserFE() {
//     // 1. check user exist
//     getUserDataFromDB();
//     // if yes , delete user
// }
//
// // deleteUserFE();
// function getProfile() {
//     // 1. get user data from DB
//     getUserDataFromDB(0);
// }
//
// updateUserFE()
// APIs >> call function

/**
 * deleteUser(()=>{
 *     deleteRelatedPosts(()=>{
 *         deleteRealtedComments(()=>{
 *             deleteRelatedReels(()=>{
 *                 deleteRelatedReactions(()=>{
 *                     deleteVideosFromCloud(()=>{
 *                         deleteFilesFromCloud()
 *                     })
 *                 })
 *             })
 *         })
 *     })
 * })
 */

// ================ promises
// function getUserData(id) {
//     return new Promise((resolve, reject) => {
//         if (typeof id !== 'number') {
//             return reject('id must be a valid number');
//             // return
//         }
//
//         // select email , password , userName from users where userId = 1;
//         let userData = [{userName: "ka3bora", email: "k@g.com", password: "1234"}]
//         console.log('1111111111111111111111111111111111111111')
//         resolve(userData);
//     });
// }


// // get user >> create order
// getUserData('ka3bora').then((userData) => {
//
//     console.log(userData);
// }).catch(
//     (reason) => {
//         console.error(reason);
//     }
// )
//
