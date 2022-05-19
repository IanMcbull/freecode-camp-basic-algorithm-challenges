/*
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/
const frankenSplice = (arr1,arr2,n) =>{
    let copyArr = arr2.slice()
    copyArr.splice(n,0,...arr1)
    return copyArr;
}
console.log(frankenSplice([1, 2, 3, 4], [], 0));

/*
The first thing that I had to do for this challlenge, is make a copy of arr2.
Which I did using the slice method.
Once we have copy of arr2, we can then use the splice method to copy all the contents of arr1 into our copy of arr2.
*/