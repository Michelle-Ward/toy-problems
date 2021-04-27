
const insertionSort = (array) => {
  //iterate over the array starting at first index
    //create variable to hold index of current value to compare assigned to i intially
    //iterate backward starting i - 1
      //if the current i value is less than the current j value
        //create temp to hold current value
        //reassign current index to j value
        //reassign j index to temp value
        //reassign variable index of value to compare to j
        //continue iterating
      //no longer swapping values break the inner loop
  //return the sorted array
  for (let i = 1; i < array.length; i++) {
    let current = i;
    for (let j = i - 1; j > -1; j--) {
      if (array[current] < array[j]) {
        let temp = array[current];
        array[current] = array[j];
        array[j] = temp;
        current = j;
        continue;
      }
      break;
    }
  }
  return array;
}