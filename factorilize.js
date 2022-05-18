/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

*/
const factorilize = (num) =>{
 if(num === 1){
     return num
 }
 return num * factorilize(num-1)
}
factorilize(5)

/*
For this challenge I decided to use recursion
As long as the number is equal to 1 the function will return 1
If the number is greater than one, the function will call itself
*/