/* 
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// We need to put brackets around 9/5 because we want that expression to be calculated first.
//Brackets will take precedence over any other operation
// This is how the operation will be carried out
// 9/5 * celsius +32
module.exports = (celsius)=>{
 return celsius * (9/5) + 32
}
