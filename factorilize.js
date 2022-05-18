/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
*/

// Solving this using fo loops
const factorilizeLoopy = (num) =>{
    let product =1;
    for(let i = num;i > 0;i--){
      product *= i
    }
    return product;
}
console.log(factorilizeLoopy(5))

// solving the challenge using recursion
const factorilize = (num) =>{
 if(num <= 1){
     return 1
 }
 return num * factorilize(num-1)
}
//console.log(factorilize(0))

/*
For this challenge I decided to use recursion
As long as the number is equal to or less than 1 the function will return 1
If the number is greater than one, the function will call itself
*/