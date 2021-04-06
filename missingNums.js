// i: array of nums in range
// o: a number that should be in that range
// c: time space optimization after naive
// e: none

//assumptions: array length is equal to end of range and is inclusive. always starts with 0. index will be equal to expected value

//sort the array. iterate over the array to the non zero indexed length value, if the current value is not equal to the index then return the index
const missingNums = (nums) => {
  nums.sort( (a,b) => a-b);
    let idx = 0;
    while (idx <= nums.length) {
        if (nums[idx] !== idx) {
            return idx;
        }
        idx++;
    }
}