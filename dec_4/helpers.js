var mostCommon = require('./mostCommon/mostCommon').mostCommon;

module.exports = {
    // sum all elements in an array, return num
    toSum: function(a, b) { 
        return a + b; 
    },

    // find sectorID in string and return it as Number type
    idToNum: function(room) {
        var sectorID = (/\d+/g).exec(room);

        return Number(sectorID);
    },

    // find valid rooms
    isValidRm: function (r) {
        var checksum = getChecksum(r),
            sum = mostCommon(r);

        function getChecksum(rm) {
            var expected = rm.match(/\[.*/)[0], 
                checksum = expected.slice(1, expected.length-1);

            return checksum;
        }

        // compare and return Boolean
        function isValid(sum, checksum) {
            return checksum === sum;
        }

        return isValid(sum, checksum);
    }
};

