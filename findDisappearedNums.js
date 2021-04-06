// I: array of integers, values will fall inclusively between 1 and array's length
// o: array of all nums in range that don't appear in input array
// c: none
// e: empty array?

//check each number in range and see if it appears in input array, starting at 1 and ending at array'slength
//if the current num doesn't appear in the array then push it to a new array
//return the new array
const findDisappearedNums = (nums) => {
  let disappearedNums = [];
  let i = 1;
  while (i <= nums.length) {
    if (nums.indexOf(i) === -1) {
      disappearedNums.push(i);
    }
    i++;
  }
  return disappearedNums;
}