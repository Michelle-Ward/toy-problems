//i: array of integers subsequence - array of integers
//o: boolean - true the subseq includes numbers (order same) of the input array
//c: subsequence must maintain order
//e: empty array? assume always given a full array
//single array element? true sub is the same array? true

//if the subsequence is longer
    //return false
  //create variable assigned to 0 to track array's index
  //create a variable to keep track of the sub sequence index

  // iterate while both index's are valid
    //if the current char of subsequence is equal to current of array
      //increase the index of s
    //increase array
  //if s is greater than equal to length return true
  //else return false
const isSubsequence = (array, subsequence) => {
  if (subsequence.length > array.length) {
    return false;
  }

  let sIndex = 0;
  let aIndex = 0;
  while (sIndex < subsequence.length && aIndex < array.length) {
    if (subsequence[sIndex] === array[aIndex]) {
      sIndex += 1;
    }
    aIndex += 1;
  }
  if (sIndex >= subsequence.length) {
    return true;
  } else {
    return false;
  }
}