/*
Check if a value is classified as a boolean primitive. Return true or false.
*/

const booWho = (bool) =>{
  return typeof bool === 'boolean';
}
booWho("false")

/*
This particular challenge wants the code to test the primitive type of the value bool not the value itself.
Primitive type include:
Number
String
Boolean
null
undefined
So with this in mind, we will use the typeof operator to test the primitive value. 
if the primitive value is not a boolean, we will return false

*/