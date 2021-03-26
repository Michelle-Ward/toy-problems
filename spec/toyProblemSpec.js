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
      expect(actual).to.be.equal('zabc');
    });
    it('should handle a key that wraps multiple times', function() {
      let actual = ccEncryptor('hfuwefsdahgiewjebfjkheuw', 52);
      expect(actual).to.be.equal('hfuwefsdahgiewjebfjkheuw');
    });
  });
  describe('isSubsequence', function() {
    it('should return a boolean', function() {
      let actual = isSubsequence('abc');
      expect(typeof actual).to.be.equal('string');
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
      let actual = insertionSort('abc');
      expect(typeof actual).to.be.equal('string');
    });
  });
});