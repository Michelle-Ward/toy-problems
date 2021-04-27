const stringSearch = (string, fragment) => {
  let count = 0;
  for ( let i = 0; i < string.length; i++ ) {
    for ( let j = 0; j < fragment.length; j++) {
      if (fragment[j] !== string[i+j]) {
        break;
      }
      if (j === fragment.length - 1) {
        count += 1;
      }
    }
  }
  return count;
}