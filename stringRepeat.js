/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

const repeatStringNumTimes = (str,num) =>{
  if(num < 1){
      return ""
  }
  let strRepeat = '';
  for(let i = 0; i < num; i++){
      strRepeat += str
  }
  return strRepeat
}

repeatStringNumTimes("*", 8);

/*
I went with a more verbose solution for this problem.
*/