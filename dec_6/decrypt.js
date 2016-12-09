(function() {
    'use strict';

    //modules
    var fs = require('fs');

    // functions
    var helpers = require('../dec_4/mostCommon/mostCommonHelpers'),
        transform = require('./transform.js'),
        freq = require('./frequencies.js');
    // solutions
    return new Promise(function(resolve, reject) {
            fs.readFile('input.txt', function(err, data) {
                if(err) { throw err; }
                resolve(data.toString().split('\n'));
            });
        }).then(function(lines) {
            return transform.getRows(lines);
        }).then(function(rows) {
            return transform.transpose(rows);
        }).then(function(cols) {
            return freq.getModes(cols).map(function(c) {
                return helpers.sortDesc(c).map(function(pair) {
                    return Object.keys(pair).toString();
                });
            });
        }).then(function(letters) {
            // solution to part I
            var mostFrequent = letters.map(freq.mostFrequent).join('');
            // solution to part II
            var leastFrequent = letters.map(freq.leastFrequent).join('');

            return ['solution pt I: ' + mostFrequent, '\nsolution pt II: ' + leastFrequent];
        }).then(function(freqs) {
            console.log(freqs.join(' '));
        });
})();
