/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
log = console.log;
let str = "fooziman";
let len = str.length;
let result = [];
let i = 0;
while (i < len){
    result.push(str[i]);
    i++;    
}
log(result);

//export result
module.exports = result;