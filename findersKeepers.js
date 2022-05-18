/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

const findElement = (arr,func) =>{
 if(!arr.filter(func)){
    return undefined;
 }
 return arr.filter(func)[0]
}
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));

/*
I decided to use filter which will only return an array of elements that pass the test.
The test we are referring to, is the function that's passed in as the second argument.
filter takes in a callback function as a parameter.
So the first checks whether the filter method returned false for all the elements.
If it did, then undefined is returned, otherwise
the filter method will return an array that has elements that matched the test.
Then since it's an array, we access the first element in the array[0]
*/