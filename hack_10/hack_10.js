/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */
//log = console.log;
let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];
let len = arr.length;

for (let i = 0; i < len; i++) {
    if (i % 2 == 1) {
        result.push(arr[i]);
    }
}

//log(result);

//export result
module.exports = result;