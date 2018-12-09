
const _ = require('lodash')

module.exports = {
    somme: function(a, b){
        return a+b
    }, 

    multiply: function(a, b){
        return a*b
    }, 

    doStrangeThings: function(arr, size){
        var tArray = _.chunk(arr, size)
        console.log(tArray)
        return tArray
    }, 

    compacter : function(arr){
        return _.compact(arr)
    }
}

