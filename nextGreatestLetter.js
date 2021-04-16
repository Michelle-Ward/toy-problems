//i: letters- sorted array of characters target - string character
//o: string character that is next larger than target
//constraints: lowercase only, must wrap around
//edge: the target is the same as a value in the array


//find the letter in the array that has a character code with that is larger than the target's character code and is then the smallest difference

//
const nextGreatestLetter = (letters, target) => {
  //iterate over the array
    //if the char code is greater than char codeof target
      //return the current char
  //return the first element of the array
  for ( var i = 0; i < letters.legnth; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }
  return letters[0];
}