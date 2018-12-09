var expect = require('chai').expect;
var somme = require('../index.js');

describe('somme', function() {
    it('should sum two values', function(){
        // 1. WHEN
        var x = 5;
        var y = 1;

        // 2. CALLING
        var sum = somme(x, y);
  
        // 3. SHOULD
        expectedSum = 6
        expect(sum).to.be.equal(expectedSum);
    })
});