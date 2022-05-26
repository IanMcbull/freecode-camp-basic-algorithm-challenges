/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
const diffArr = (arr,arr2) =>{
let newArr = [];
arr.forEach(el=>{
    if(!arr2.includes(el)){
     newArr.push(el);
    }
})
arr2.forEach(el=>{
    if(!arr.includes(el)){
     newArr.push(el);
    }
})
return newArr;
}
console.log(diffArr([1, "calf", 3, "piglet"], [7, "filly"]))