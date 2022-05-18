/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
const confirmEnding = (str,ending) =>{
 return str.substr(-ending.length) === ending

}
console.log(confirmEnding("Congratulation", "on"))