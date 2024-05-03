/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 *output => ["b@r","b@z","QUX"]   
 */
log = console.log;
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let len = arr.length
let cambioArr = [];

for (let i = 0; i < len ; i++)
    if (i > 0 && i < 4){
    cambioArr.push(arr[i])
}
let lenA = cambioArr.length;

for (let i = 0; i < lenA; i++) {
    let word = cambioArr[i];
    if (word.startsWith("b")) {
        result.push(word.replace("a", "@"));
    } else {
        result.push(word.toUpperCase());
    }
}
//log(cambioArr)
log(result);
    //log(result)
    
// result.push(arr[1].replace("a","@"))
// result.push(arr[2].replace("a","@"))
// result.push(arr[3].toUpperCase())

//export result
module.exports = result;