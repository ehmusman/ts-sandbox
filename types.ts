// console.log('Hello from TS ')
// write 'tsc filename' in terminal to compile the file in javascript file
let myString: string;
myString = 'this is first string'
// myString = 1; // will generate an error
console.log(myString)

// tsc filename -w // run the compiler at watch time

// number type
let myNum : number;
myNum = 1;
console.log(myNum)

// boolean
let myBool: boolean = true;
console.log(myBool)

// string with function
let funString: string = 'hello'.slice(0, 3)
console.log(funString)

// strin with concatenate

let concateString: string = 'hello' +' '+'World'
console.log(concateString)


// any datatype

let anyType: any = 'hello'; // anytype can be written here
console.log(anyType)