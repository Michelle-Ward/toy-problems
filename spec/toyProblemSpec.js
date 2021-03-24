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
});