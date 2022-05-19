/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
const confirmEnding = (str,target) =>{
 return str.substr(-target.length) === target

}
confirmEnding("Congratulation", "on")

/*
With this challenge, I used the substr method to return the last part of the string, then compared and checked whether the returned value, was equal to the target value
*/