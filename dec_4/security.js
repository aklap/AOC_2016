(function() {
    "use strict";
    // Question: What is the sum of the sector IDs of the real rooms?

    var fs = require('fs'),
        helpers = require('./helpers.js'),
        mostCommon = require('./mostCommon/mostCommon');

    return new Promise(function(resolve, reject) {
            fs.readFile('input.txt', function(err, data){
                if(err) { throw err; }
                resolve(data.toString().split('\n'));
            });
        }).then(function(rooms) {
            return rooms.filter(helpers.isValidRm);
        }).then(function(validRms) {
            return validRms.map(helpers.idToNum);
        }).then(function(sectorIds) {
            return sectorIds.reduce(helpers.toSum);
        }).then(function(total) {
            console.log(total);
            return total;
        });
})();
