//i: string
//o: boolean true-no duplicate character false-duplicates found
//c: advanced: do without extra data structure
//e: what if string is empty?

//keep track of duplicate values. iterate over string. if current value has been seen before return false. otherwise add the current value to the tracker with an initial value of 1 and continue. return true after iteration completes

//create object to keep track of chars
  //iterate over string
    //if the object at current charater is defined
      //return false
    //other wise add it to obj assigned to 1
  //return true
const isUnique = (string) => {
  let charObj = {};
  for ( let i = 0; i < string.length; i++ ) {
    if ( charObj[string[i]] ) {
      return false;
    }
    charObj[string[i]] = 1;
  }
  return true;
}