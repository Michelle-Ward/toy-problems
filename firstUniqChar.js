//i: a string - assume lower case
//o: index of first uniq char
//c: time complexity?
//e: no uniq chars? return -1

//iterate over the array, loggin characters seen with a tupple of count and then first index. iterate over log and find the index of the first character with a count 1. at end return -1 no uniq char was found

//create object to store count of characters
  //iterate over the array
    //if the current char is not a prop in the obj
      //add prop with array of count starting at one and then current index
    //else
      //increase the count value of the character
  // iterate over the obj returning the first prop with a value of 1's index value
const firstUniqChar = (string) => {
  let charObj = {};
  for ( let i = 0; i < string.length; i++ ) {
    if ( charObj[string[i]] === undefined ) {
      charObj[string[i]] = 1;
    } else {
      charObj[string[i]] += 1;
    }
  }
  for ( let j = 0; j < string.length; j++) {
    if (charObj[string[j]] === 1) {
      return j;
    }
  }
  return -1;
}

//alternate solution with better time complexity
// if (string.length === 1) {
//   return 0;
// }
// for ( var i = 0; i < string.length; i++ ) {
//   for ( var j = 0; j < string.length; j++ ) {
//     if ( string[i] === string[j] && j !== i ) {
//       break
//     } else if (j === string.length - 1 ) {
//       if (string[i] !== string[j] || i === string.length - 1) {
//         return i;
//       }
//     }
//   }
// }
// return -1;

