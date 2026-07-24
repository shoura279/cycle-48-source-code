// // callback - promises
// // ============== database
// function getUserById(id, cb) {
//     // query >> // select userName , email , password from users where userId = ${id};
//     setTimeout(function () {
//         // get data from DB
//         let userData = {
//             id: 1, userName: "ka3bora", email: "k@g.com"
//         }
//         console.log(userData);
//         // updateUserById(1, {userName: "ka3bora new"});// tightly coupled
//         // action >> delete - update - order - checkout - create post - like - comment -
//         if (typeof cb === 'function') cb();
//         // action() =  function () {updateUserById(1, {userName: "ka3bora new"});}
//     }, 3000);
// }
//
// // ? p1: update user -> 1. get user data -> 2. update user
// // ? p2: delete user -> 1. get user data -> 2. delete user
// // ? p3: get profile -> 1. get user data
//
// function updateUserById(id, newData) {
//     setTimeout(
//         function () {
//             // get data from DB
//             let newData = {
//                 id: 1, userName: "ka3bora new", email: "k@g.com", password: "12345"
//             }
//             console.log(newData);
//             console.log('user update successfully');
//         },
//         2000)
// }
//
//
// // ============ updateUserAPI
// function updateUserAPI() {
//     // 1. get user data from DB
//     getUserById(
//         1,
//         updateUserById
//     )
//     ;// 3000
// }
//
// function deleteUserAPI() {
//     // 1. get user from DB
//     getUserById(1);
//     // 2. delete user
// }
//
// function getProfileAPI() {
//     // 1. get user data from DB
//     getUserById(1);
// }
//
// // updateUserAPI()
// // deleteUserAPI();
//
// setTimeout(function () {
//     console.log(1);
// }, 5000);
// // 10:21

/**
 * deleteUser(()=>{
 *      logic of code
 *     deleteRelatedPosts(()=>{
 *         deleteRealtedComments(()=>{
 *             deleteRelatedReactions(()=>{
 *                 deleteRealtedReels(()=>{
 *                     deleteRealtedVideos(()=>{
 *                         deleteRelatedFiles()
 *                     })
 *                 })
 *             })
 *         })
 *     })
 * })
 */
function getUserById(id) {
    return new Promise((actionSuccess, actionFail) => {
        if (typeof id !== "number") {
            return actionFail('id must be a valid number!😡'); // break >> approach fail
        }
        // select userName , email , password from users where userId = id;
        let result = [{id: 1, userName: "ka3bora", password: "12345"}];// fail or success
        console.log(result);
        // success >> resolve()
        // fail    >> reject()
        actionSuccess(result);// go on >> []
    });
}

function updateUserById(id, newData) {
    return new Promise((resolve, reject) => {
        if (typeof id !== 'number') {
            reject('id must be a valid number!');
        }
        // null
        if (typeof newData !== 'object' && newData === null) {
            reject('newData must be a valid object!');
        }
        // logic of code update >> update users set newData where userId = id;
        resolve({id: 1, userName: "ka3bora new", password: "12345", email: "k@g.com"});
    })
}

// getUserById(12345);
getUserById('ka3bora')
    .then((value) => {
        updateUserById(12345, {userName: "ka3bora", password: "12345"})
            .then((value) => {
                console.log(value);
            })
            .catch((reason) => {
                console.error(reason);
            })
    })
    .catch((err) => {
        console.error(err);
    })


getUserById('ka3bora')
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.error(err);
    })


getUserById('ka3bora')
    .then((value) => {
        // deleteUser(12345, {userName: "ka3bora", password: "12345"})
        //     .then((value) => {
        //         console.log(value);
        //     })
        //     .catch((reason) => {
        //         console.error(reason);
        //     })
    })
    .catch((err) => {
        console.error(err);
    })

function createProduct() {

}