var helpers = require('../dec_4/mostCommon/mostCommonHelpers');

module.exports = {
    getModes: function(cols) {
        var allModes = [];

        for(var i=0; i<cols.length; i++) {
                var modes = {};
            for(var j=0; j<cols[i].length; j++) {
                var letter = cols[i][j];

                !modes[letter] ? modes[letter] = 1 : modes[letter]++;
            }
                allModes.push(helpers.getList(modes));
        }

        return allModes;
    },

    mostFrequent: function(c) {
        return c[0];
    },

    leastFrequent: function(c) {
        return c[c.length-1];
    }
};
