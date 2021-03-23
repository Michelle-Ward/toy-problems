//input: array of numbers (positive and negative integers)
//output: sorted array least -> greatest
//constraints: sort in place
//edge cases: empty array? return empty array. assume only integer values in the array

//keeping track if any swaps occur iterate over the input array. if the current number is greater than the next number, swap current and next. mark that a swap occured. when done iterating, if a swap occured call bubblesort again on the input array. return the array;

 //create variable swapped assign to false
  //iterate over the array
    //if the current number is greater than the next
      //create temp variable to save current value
      //assign current index to next value
      //assign next index to temp
      //reassign swapped variable to true
  //if swapped
    //call bubblesort on input array
  //return input array

const bubbleSort = (array) => {
  let swapped = false;
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] > array[i+1] ) {
      let temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
      swapped = true;
    }
  }
  if ( swapped ) {
    bubbleSort(array);
  }
  return array;
}