/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

const largestOfFour = (arr) =>{
    let arrOfLargest = [];
    for (const element of arr) {
        arrOfLargest.push(Math.max(...element))
    }
    return arrOfLargest;
}
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])

/*
This challenge was pretty straightforward.
I wrote the code in a self-explainatory manner.
*/