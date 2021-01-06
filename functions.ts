
// types is number
function getSum(num1 : number, num2: number ) {
return num1+num2
}
console.log(getSum(3,5))

// type is a string and concatinate it
// function mySum(num1 :string, num2:string ): string {
//     return num1+num2
//     }
//     console.log(mySum('2', '3'))
    

// type is any
function mySum(num1 :any, num2:any ):number {
    if(typeof num1 === 'string'){
        num1 = parseInt(num1)
    }
    if(typeof num2 === 'string'){
        num2 = parseInt(num2)
    }
    return num1+num2
    }
    console.log(mySum(2, '78'))
    