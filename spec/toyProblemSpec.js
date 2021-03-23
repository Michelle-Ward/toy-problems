describe('Toy Problems', function() {
  describe('bubble sort', function() {
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
});