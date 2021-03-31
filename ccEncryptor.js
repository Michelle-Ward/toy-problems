//i: a string, key - integer to number of places to shift letters over
//o: encrypted string shifted key amount from original input
//c: should wrap
//e: what if key is more than 26

//iterate over the input string, get the char code of the current character add the key to the code. if code is greater than code of z subtract the result of the key divided by 26 times 26. add the string character version to a new string from the resulting charactercode
const ccEncryptor = (string, key) => {
  //create new string
  //iterate over input string
    //get character code of current char and add key
    //if the char code is greater than 122
      //subtract 26 times key divided by 26
    //add the stringchar of the code to the new string
  //return string
  let encryptedString = '';
  for ( var i = 0; i < string.length; i++ ) {
    let charCode = string.charCodeAt(i) + (key % 26);
    if ( charCode > 122 ) {
      charCode = (96 + charCode % 122);
    }
    encryptedString += String.fromCharCode(charCode);
  }
  return encryptedString;
}