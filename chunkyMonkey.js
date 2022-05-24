/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

const chunkArrayInGroups = (arr,size) =>{
  let arrNew = []
    for(let i=0;i<arr.length;i+=size){
    arrNew.push(arr.slice(i,i+size))
  } 
  return arrNew;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)

/*
The first thing I can see it there is a correlation between, the length of the array, and the number of times we will need to split the array.
What do i mean by this. If the length of the array, is divisible by size provided, we have an even nuber of sub arrays.
If the size provided is 2 and the length of the array is 4 then we will have two sub arrays.
*/