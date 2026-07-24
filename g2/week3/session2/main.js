const y = require('node:path');
let x = 'D:users/ka3bora/pp.jpg';
const imageName =require('node:path').basename(x);
const result = y.extname(x);
const result2 = y.dirname(x);
const result3 = y.parse(x);
const result4 = y.format(result3);

console.log(imageName)
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);