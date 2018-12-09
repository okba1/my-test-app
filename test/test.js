var expect = require('chai').expect;
var somme = require('../index.js').somme;
var multiply = require('../index.js').multiply;
var doStrangeThings = require('../index.js').doStrangeThings;
var compacter = require('../index.js').compacter;

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

    it('should multiply two values', function(){
        // 1. WHEN
        var x = 5;
        var y = 4;

        // 2. CALLING
        var mult = multiply(x, y);
  
        // 3. SHOULD
        expectedMult = 20
        expect(mult).to.be.equal(expectedMult);
    }), 

    it('should split the array on 3 chuncks of size 2', function(){
        // 1. WHEN
        var myArray = [1,2,4,7,9,10]
        var size = 2
        // 2. CALLING
        var tArray = doStrangeThings(myArray, size);
        
        // 3. SHOULD
        expTable = [[1,2],[4,7],[9,10]]
        expect(tArray).to.be.deep.equal(expTable);
    }), 

    it('should remove all the occurence of False, 0, NaN, \'\', null, undefined', function(){
        // 1. WHEN
        var myArray = [undefined,2,false,7,NaN,10, null]
        // 2. CALLING
        var tArray = compacter(myArray);
        
        // 3. SHOULD
        expTable = [2,7,10]
        expect(tArray).to.be.deep.equal(expTable);
    })

});