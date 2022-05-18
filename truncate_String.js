/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

const truncateString = (str, num) =>{
  if(str.length <= num){
    return str
  }
  return str.substring(0,num) + '...'
}
console.log(truncateString("Absolutely Longer", 2));

/*
I tried to make this solution as self explanatory as possible.
so basically, the first step is to check whether the length of the str is less than or equal to the provided num.
If it is,then the str is returned in it's entirity
If the str is longer, we extract a subsection of the string, starting from position 0, to position num
*/