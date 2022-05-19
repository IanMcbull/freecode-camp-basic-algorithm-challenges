/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

const bouncer = (arr) =>{
  return arr.filter(ele=>ele)
}
console.log(bouncer([null, NaN, 1, 2, undefined]))

/*
I thought this was a pretty straightforward challenge.
The filter method only returns values that are truthy. So if we loop over the provided arr, the method will filter the array and only return the truth values
*/