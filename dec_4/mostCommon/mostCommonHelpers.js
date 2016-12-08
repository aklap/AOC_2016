module.exports = {
    // takes in a string and returns only the letters
    sanitize: function(input){
        return input
            .split('[')[0]
            .match(/[a-z]/g);
    },

    // takes in an object and returns the key
    getLetter: function (el) {
        return Object.keys(el);
    },

    // takes in an array and outputs an object
    getFrequencies: function (input) {
        var mostFrequent = {};
    
        function count(l) {
            !mostFrequent[l] ? mostFrequent[l] = 1 : mostFrequent[l]++;
        }

        input.map(count);

        return mostFrequent;
    },

    // takes in an object, returns a list of objects
     getList: function(freqs) {
        var freqList = [];

        for(var i in freqs) {
            var pair = {};

            pair[i] = freqs[i];
            freqList.push(pair);
        }

        return freqList;
    },

    // takes in a list, outputs sorted list
     sortDesc: function(list) {

        // sort objects by mode first, then by key alphabetically
        specialSort = function(prev, curr) {
            var a = prev[Object.keys(prev)],
            b = curr[Object.keys(curr)];

            // if prev is greater
            if(b > a) {
                return 1;   
            }

            // if curr is greater
            if(b < a) {
                return -1;
            }

            // if they're equal, alphabetical first 
            if(a === b) {
                var prevLetter = Object.keys(prev)[0].charCodeAt(),
                    currLetter = Object.keys(curr)[0].charCodeAt(); 

                return prevLetter < currLetter ? -1 : 1;
            }
        }

        return list.sort(specialSort);
    }
}