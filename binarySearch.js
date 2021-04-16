//i: array of nums
//o: index of target num found or -1 if not
//c: none
//e:empty array? -1

//create left pointer assign to start of array
  //create right pointer assign to end of the array
  //while left is less than right
    //create mid assigned to right- left divided by 2  plus left and round down
    //if the array at mid is equal to the target
      //return mid
    //if the array at mid is less than the target
      //reassign left to mid plus 1
    //if the array at mid is more than the target
      //reassign right to mid minus 1
  //return -1
const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length-1;
    while (left <= right) {
        let mid = Math.floor((right - left)/2 + left);
        if (array[mid] === target) {
            return mid;
        }
        if (array[mid] < target) {
            left = mid+1;
        }
        if (array[mid] > target) {
            right = mid-1;
        }
    }
    return -1;
};
