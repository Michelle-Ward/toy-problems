//input: array of numbers
//output: number in that array that occurs more than n/2 times, n = length
//constraints: aim for linear time
//edge: no majority? assume there is always a majority
const majoritySearch = (array) => {
  let charObj ={};
  for ( let i = 0; i < array.length; i++ ) {
    if ( charObj[array[i]] === undefined ) {
      charObj[array[i]] = 1;
    } else {
      charObj[array[i]] += 1;
    }
  }
  for  ( let key in charObj ) {
    if ( charObj[key] > ( array.length / 2 )) {
      return Number(key);
    }
  }
}