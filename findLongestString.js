/*
Return the length of the  longest word in a string
*/
const findLongestWord = (str) =>{
    return Math.max(...str.split(' ').map(string=>string.length));
}
findLongestWord('What if we try a super-long word such as otorhinolaryngology');

/*
I first started thinking of how I could split the individual words, which I did using the split method, which split the sentence by spaces.
Once this was done, I mapped the lengths of the individual words using the map method.
Which returned an array or numbers. Then I spread out the array using the spread operator, and identified the largest number uisng the Math.max
*/