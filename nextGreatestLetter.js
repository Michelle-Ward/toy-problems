//i: letters- sorted array of characters target - string character
//o: string character that is next larger than target
//constraints: lowercase only, must wrap around
//edge: the target is the same as a value in the array


//find the letter in the array that has a character code with that is larger than the target's character code and is then the smallest difference

//
const nextGreatestLetter = (letters, target) => {
  let lo = 0;
  let hi = letters.length;
  while (lo < hi) {
      let mid = Math.floor((hi-lo)/2) + lo;
      if (letters[mid] > target) {
          hi = mid
      } else {
          lo = mid + 1;
      }
  }
  let idx = lo % (letters.length);
  return letters[idx];
}