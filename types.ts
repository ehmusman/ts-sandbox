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

/////////////////////////Moving toward array

// string array
// let strArray: string[] = ['hello', ' ', 'world']
let strArray : Array<string>
strArray = ['hello', ' ', 'world']
console.log(strArray)

// number array

// let numArray : number[] = [1,2,3,4]
let numArray : Array<number>
numArray = [1,2,3,4];
console.log(numArray)

// boolean array

// let booleanArray : boolean[] = [true, false]
let booleanArray : Array<boolean>
booleanArray = [true, false];
console.log(booleanArray)

// any array

// let anyArray: any[] = [12, '1243', 'hello', true]
let anyArray : Array<any>
anyArray = [12, '1243', 'hello', true];
console.log(anyArray)


/////////////////////////////