  // Write your code here.
	//sort the arrays by order depending on fastest
	//create a count variable to sum up largest num of pairs
	//iterate over the arrays
     //add the max value to the count
	//return count
const getMaxPairSums = (arr1, arr2) => {
  if (fastest) {
		redShirtSpeeds.sort( (a,b) => b-a);
		blueShirtSpeeds.sort( (a,b) => a-b);
	} else {
		redShirtSpeeds.sort( (a,b) => a-b);
		blueShirtSpeeds.sort( (a,b) => a-b);
	}
	let count = 0;
	for ( let i = 0; i < redShirtSpeeds.length; i++) {
		count += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
	}
  return count;
}