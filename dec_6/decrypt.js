var fs = require('fs');

// functions
var helpers = require('../dec_4/mostCommon/mostCommonHelpers'),
    transform = require('./transform.js'),
    freq = require('./frequencies.js');

var lines = fs.readFileSync('input.txt').toString().split('\n'),
    rows = transform.getRows(lines),
    cols = transform.transpose(rows),
    letters = freq.getModes(cols).map(function(c) {
        return helpers.sortDesc(c).map(function(pair) {
            return Object.keys(pair).toString();
        });
    });

// solution to part I
var mostFrequent = letters.map(freq.mostFrequent).join('');

// solution to part II
var leastFrequent = letters.map(freq.leastFrequent).join('');

console.log(mostFrequent, leastFrequent);
