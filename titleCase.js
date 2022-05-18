/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
*/

 const titleCase = (str) =>{
   return str.toLowerCase().split(' ').map(words=>words.replace(words[0],words[0].toUpperCase())).join(' ');
 }

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))

/*
 The trick with this particular challenge was figuring out how to get just the first letter of every word to capitalize, while ensuring that the rest of the words were in lowerCase. 
 To address this, I started by first making every letter a lowercase letter. 
 Once this was done, I split the string by words, then used the map method to  replace the first letter of every word, with it's capitalized counter-part.
 The array that is returned will contain the words with their first letters capitalized.
 The next step, is to join the words in the array to a single string 
*/