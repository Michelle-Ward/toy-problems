//i: array of integers, target - integer
//o: return an array of two integers in input array that sum up to target
//c: must return the first pair
//e: not possible to reach target sum with given numbers? return empty array

//iterate over the array, check all numbers after the current number to see if they equal target sum. If the pair does return a tupple with the current number and the current 2nd number. return an empty arrray at the end of iteration
//iterate over array
    //iterate over array starting at first index
      //if outer current number plus inner current number equals target sum
  //return empty array

const twoNumberSum = (array, target) => {
  for ( let i = 0; i < array.length; i++ ) {
    for ( let j = 0; j < array.length; j++ ) {
      if ( array[i] + array[j] === target ) {
        return [ array[i], array[j]];
      }
    }
  }
  return [];
}