describe('Toy Problems', function() {
  describe('bubbleSort', function() {
    it('should return an array', function() {
      let actual = bubbleSort([ 9, 5, 4]);
      let expected = [ 4, 5, 9];
      expect(actual).to.be.eql(expected);
    });
    it('should be able to sort negative and positive integers', function() {
      let actual = bubbleSort([ 54, 32, -12, 3, 24, -50]);
      let expected = [ -50, -12, 3, 24, 32, 54];
      expect(actual).to.be.eql(expected);
    });
    it('should return an empty array if input array is empty', function() {
      let actual = bubbleSort([]);
      let expected = [];
      expect(actual.length).to.be.equal(expected.length);
    });
    it('should be able to sort negative numbers', function() {
      let actual = bubbleSort([ -6, -34, -73, -2, -14]);
      let expected = [-73, -34, -14, -6, -2];
      expect(actual).to.be.eql(expected);
    });
  });
  describe('twoNumberSum', function() {
    it('should return an array', function() {
      let actual = twoNumberSum([2,6,3,5,8,1], 8);
      let expected = [2,6];
      expect(actual).to.be.eql(expected);
    });
    it('should be able to return the first pair of numbers that equal the target sum', function() {
      let actual = twoNumberSum([2,6,3,5,8,1, 4], 9);
      let expected = [6,3];
      expect(actual).to.be.eql(expected);
    });
    it('should be able to handle negative integers', function() {
      let actual = twoNumberSum([5,-3, 9, 1, 4, -1], 6);
      let expected = [-3,9];
      expect(actual.length).to.be.equal(expected.length);
    });
    it('should be able to handle a negative target input', function() {
      let actual = twoNumberSum([-10, -2, -1, -5], -3);
      let expected = [-2,-1];
      expect(actual).to.be.eql(expected);
    });
  });
  describe('isUnique', function() {
    it('should return a boolean', function() {
      let actual = isUnique('racecar');
      expect(typeof actual).to.be.equal('boolean');
    });
    it('should return true if string contains unique characters', function() {
      let actual = isUnique('adsfjklwetuobnxm');
      expect(actual).to.be.true;
    });
    it('should return false if string has duplicate characters', function() {
      let actual = isUnique('racecar');
      expect(actual).to.be.false;
    });
  });
  describe('firstUnqiChar', function() {
    it('should return index of first uniq characters', function() {
      let actual = firstUniqChar('abbbcdd');
      let expected = 0;
      expect(actual).to.be.equal(expected);
    });
    it('should return index of first uniq characters', function() {
      let actual = firstUniqChar('jdbkhgahuerjh');
      let expected = 1;
      expect(actual).to.be.equal(expected);
    });
    it('should return index of first uniq characters', function() {
      let actual = firstUniqChar('racecar');
      let expected = 3;
      expect(actual).to.be.equal(expected);
    });
    it('should return -1 if no unique characters', function() {
      let actual = firstUniqChar('zzxxxyyyssssdddeeeffff');
      let expected = -1;
      expect(actual).to.be.equal(expected);
    });
  });
  describe('urlify', function() {
    it('should return a string', function() {
      let actual = urlify('hello world', 11);
      expect(typeof actual).to.be.equal('string');
    });
    it('should return a URLified string', function() {
      let actual = urlify('hello world', 11);
      let expected = 'hello%20world'
      expect(actual).to.be.equal(expected);
    });
    it('should return a URLified string', function() {
      let actual = urlify('happy and you know it clap your hands', 37);
      let expected = 'happy%20and%20you%20know%20it%20clap%20your%20hands';
      expect(actual).to.be.equal(expected);
    });
  });
  describe('majoritySearch', function() {
    it('should return a number', function() {
      let actual = majoritySearch([2,2,2,1]);
      expect(typeof actual).to.be.equal('number');
    });
    it('should return a number that occurs more then n / 2 times in the array', function() {
      let actual = majoritySearch([2,2,2,1]);
      expect(actual).to.be.equal(2);
    });
    it('should return a number that occurs more then n / 2 times in the array', function() {
      let actual = majoritySearch([4,5,2,4,7,4,5,4,4,1,2,4,4,4,43,4]);
      expect(actual).to.be.equal(4);
    });
  });
  describe('ccEncryptor', function() {
    it('should return a string', function() {
      let actual = ccEncryptor('abc', 1);
      expect(typeof actual).to.be.equal('string');
    });
    it('should return an encoded string with the appropriate shift', function() {
      let actual = ccEncryptor('dfhfsagyeb', 10);
      expect(actual).to.be.equal('nprpckqiol');
    });
    it('should handle wrapping', function() {
      let actual = ccEncryptor('xyza', 3);
      expect(actual).to.be.equal('abcd');
    });
    it('should handle a key that wraps multiple times', function() {
      let actual = ccEncryptor('hfuwefsdahgiewjebfjkheuw', 52);
      expect(actual).to.be.equal('hfuwefsdahgiewjebfjkheuw');
    });
  });
  describe('findDisappearedNums', function() {
    it('should return an array', function() {
      let actual = findDisappearedNums([1,1]);
      expect(Array.isArray(actual)).to.be.true;
    });
    it('should return nums in range that are not found', function() {
      let actual = findDisappearedNums([1,1]);
      expect(actual).to.be.eql([2]);
    });
    it('should return nums in range that are not found', function() {
      let actual = findDisappearedNums([1,5,4,2,3,3]);
      expect(actual).to.be.eql([6]);
    });
    it('should return nums in range that are not found', function() {
      let actual = findDisappearedNums([1,5,6,2,3,3,8,8]);
      expect(actual).to.be.eql([4,7]);
    });
    it('should return an empty array when no nums are disappeared', function() {
      let actual = findDisappearedNums([1]);
      expect(actual).to.be.eql([]);
    });
  });
  describe('isSubsequence', function() {
    it('should return a boolean', function() {
      let actual = isSubsequence([1,2,3,4,5,6,7,8], [2,4,7]);
      expect(typeof actual).to.be.equal('boolean');
    });
    it('should return a boolean', function() {
      let actual = isSubsequence([1,2], [2,4,7]);
      expect(actual).to.be.false;
    });
    it('should return a boolean', function() {
      let actual = isSubsequence([1,2], [2]);
      expect(actual).to.be.true;
    });
    it('should return a boolean', function() {
      let actual = isSubsequence([1,2,-2,20,7,9,70,], [-2,20,70]);
      expect(actual).to.be.true;
    });
  });
  describe('selectionSort', function() {
    it('should return an array', function() {
      let actual = selectionSort([3,2,4,5]);
      expect(Array.isArray(actual)).to.be.true;
    });
    it('should return a sorted array', function() {
      let actual = selectionSort([3,2,4,5]);
      let expected = [2,3,4,5];
      expect(actual).to.be.eql(expected);
    });
    it('should return a empty array with empty input', function() {
      let actual = selectionSort([]);
      expect(Array.isArray(actual)).to.be.true;
    });
    it('should be able to handle negative integers', function() {
      let actual = selectionSort([-31,-2,-24,-15, -1,-65, -34]);
      let expected = [-65,-34,-31,-24,-15,-2,-1];
      expect(actual).to.be.eql(expected);
    });
    it('should be able to handle negative and positive integers', function() {
      let actual = selectionSort([3,4,-2,1,0,6,-9]);
      let expected = [-9,-2,0,1,3,4,6];
      expect(actual).to.be.eql(expected);
    });
    it('should be able to handle duplicate numbers', function() {
      let actual = selectionSort([2,3,2,3,-1,-1,3,5]);
      let expected = [-1,-1,2,2,3,3,3,5];
      expect(actual).to.be.eql(expected);
    });
  });
  describe('rlEncoding', function() {
    it('should return a string', function() {
      let actual = rlEncoding('abc');
      expect(typeof actual).to.be.equal('string');
    });
  });
  describe('missingNums', function() {
    it('should return an number', function() {
      let actual = missingNums([0,2]);
      expect(typeof actual).to.be.equal('number');
    });
    it('should return an number', function() {
      let actual = missingNums([0]);
      expect(actual).to.be.equal(1);
    });
    it('should return the missing number n, if there is no skip in sequence', function() {
      let actual = missingNums([6,3,5,2,1,4,0]);
      expect(actual).to.be.equal(7);
    });
    it('should return  the missing number if their is a skio', function() {
      let actual = missingNums([0,3,2,4,6,5]);
      expect(actual).to.be.equal(1);
    });
  });
  describe('insertionSort', function() {
    it('should return an array', function() {
      let actual = insertionSort('abc');
      expect(typeof actual).to.be.equal('string');
    });
  });
  describe('nthFibonacci', function() {
    it('should return a number', function() {
      let actual = insertionSort('abc');
      expect(typeof actual).to.be.equal('string');
    });
  });
  describe('binarySearch', function() {
    it('should return a number', function() {
      let actual = binarySearch([2,3,1,6,4,8,5],6);
      expect(typeof actual).to.be.equal('number');
    });
    it('should return the index of the target num', function() {
      let actual = binarySearch([2,3,1,6,4,8,5],6);
      expect(actual).to.be.equal(3);
    });
    it('should return a negative one if target is not found in the input', function() {
      let actual = binarySearch([2,3,1,6,4,8,5],40);
      expect(actual).to.be.equal(-1);
    });
  });
  describe('nextGreatestLetter', function() {
    it('should return a number', function() {
      let actual = nextGreatestLetter('abc');
      expect(typeof actual).to.be.equal('string');
    });
  });
});