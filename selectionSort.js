//i: array of integers
//o: sorted array
//c: must be in place
//e: empty array? return empty array

//we are partitioning the array front is sorted back is unsorted. outer iteration is keeping track of the first index of the unsorted portion

//iterate over the array up to the last index. assume index of smallest value is current index. iterate over the rest of the array comparing wether the smallest value is greater than current value. if so reassign the index of smallest value to the current index of the inner iteration. when inner iteration terminates swap values of the smallest index and then the first of the unsorted array, current index of outer iteration. when outer iteration is done return the array

//iterate over array up to last index
  //create smallestIndex value assign to the index of the iteration
  //iterate over the rest of the array
    //if the array at smallIndex is greater than the array at the current index
      //reassign smallIndex
  //create temp for smallIndex value
  //reassign smallindex to current index value
  //reassign current index to temp
//return array


const selectionSort = (array) => {

}