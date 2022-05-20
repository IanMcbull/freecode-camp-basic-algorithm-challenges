/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

const mutation = (arr) => {
   arr = arr.map(el=>el.toLowerCase());
   for (const element of arr[1]){
      if(arr[0].indexOf(element) === -1){
         return false
      }
   }
   return true;
}
mutation(["Noel", "Ole"]);

/*
This was a bit challenging but I managed ti figure it out..
The first thing I did, was to transform the word in the array, into lowercase letters and
The second step, was to loop over the second element in the array
If at any point the indexOf encounters a -1, we want to exit the loop and return false
Otherwise, if indexOf does not encounter a -1, return true. Meaning all the letters exist
*/