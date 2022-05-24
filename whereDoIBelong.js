/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
*/

const getIndexToIns = (arr,num) =>{
 arr.push(num);
 return arr.sort((a,b)=>a-b).indexOf(num)
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

/*
The first thing I did, was to check whether the array had any values. If it didn't, then return zero.
if the array is not empty, then loop through the array and check whether the current element is greater or equal to the number provided. If this condition is met, then return the index of that element.
If the number provided is bigger than the last element in the array after it's been sorted,then we return the length of the array. 
 */