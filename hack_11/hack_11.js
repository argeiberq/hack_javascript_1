/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
log = console.log;
let numberArray = [1,2,3,4,5];
let numberArrayA = []
let len = numberArray.length;
for (i = 1; i <= len ; i++){
    if(i % 2 == 1){
        numberArrayA.push(i.toString())
    } else{
        numberArrayA.push(i)
    }
}
let lenD = numberArrayA.length;
let stringArray = ["foo","bar","baz","qux","echo"]
let lenA = stringArray.length;
resultA = []
let result = [];
resultA.push("h@ck")
for (let i = 0; i < lenD ; i++) {
    resultA.push(numberArrayA[i])
}
resultA.push("h@ck")
for (let i = 0; i < lenA ; i++) {
    resultA.push(stringArray[i])
}
resultA.push("h@ck")
let lenB = resultA.length;
let outputArray = [];

for (let i = 0; i < lenB; i++) {
  let item = resultA[i];
  if (typeof item === 'string') {
    if (item === 'h@ck') {
      result.push('h@ck');
    } else if (item === "1") {
      result.push('one');
    } else if (item === "3") {
      result.push('three');
    } else if (item === "5") {
      result.push('five');
    } else {
      result.push(item.replace('o', '0').replace('o', '0').replace('bar', 'Bar').replace('baz','b@z').replace("e","3").replace("x","X"));
    }
  } else {
    result.push(item);
  }
}

log(result)

// let str = numberArray[0].toString() + numberArray[1].toString() + numberArray[2].toString() + numberArray[3].toString() + numberArray[4].toString()
// str1 = str[0].replace("1","one")
// str2 = numberArray[1]
// str3 = str[2].replace("3","three")
// str4 = numberArray[3]
// str5 = str[4].replace("5","five")
// strA = stringArray[0].replace("foo","f00")
// strB = stringArray[1].replace("bar","Bar")
// strC = stringArray[2].replace("baz","b@z")
// strD = stringArray[3].replace("qux","quX")
// strE = stringArray[4].replace("echo","3ch0")
// result.push("h@ck",str1, str2, str3 ,str4 ,str5,"h@ck",strA,strB,strC,strD,strE,"h@ck")

//export result
module.exports = result;