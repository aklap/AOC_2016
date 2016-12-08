var tools = require('./mostCommonHelpers');

exports.mostCommon = function(input) {
    input = tools.sanitize(input);
    
    var freqs = tools.getFrequencies(input),
        list = tools.getList(freqs),
        sorted = tools.sortDesc(list);

    return sorted
        .slice(0,5)
        .map(function(l){
            return Object.keys(l);
        })
        .join('');
};

