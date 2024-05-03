/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let log = console.log;
let result = [];
for (let i = 1; i <= 7; i++) 
    if (i % 2 == 1){
        result.push(i)}
log(result)

//export result
module.exports = result;