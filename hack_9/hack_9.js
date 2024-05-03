/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
//log = console.log;
let arr = ["foo","bar","baz","qux","echo"];
let result = arr.filter(item => item.startsWith('b')).length;
//log(result)
//export result
module.exports = result;