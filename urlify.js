//i: string, length of array
//o: string with space replaced with %20
//c: unknown
//e: no spaces? specialcharacters?
const urlify = (string, len) => {
  let url = '';

  for ( let i = 0; i < len; i++ ) {
    if ( string[i] === ' ' ) {
      url += '%20';
    } else  {
      url += string[i];
    }
  }
  return url;
}