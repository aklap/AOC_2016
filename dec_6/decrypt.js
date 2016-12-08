var fs = require('fs');
var sortDesc = require('../dec_4/mostCommon/mostCommonHelpers').sortDesc;
var getList = require('../dec_4/mostCommon/mostCommonHelpers').getList;


var lines = fs.readFileSync('test.txt').toString().split('\n');

var rows = lines.map(function(el, i){
    return el.trim().split('');
});

function transpose(rows) {
    return rows[0].map(function(_, j) {
        return rows.map(function(_, k) {
            
            if(rows[k][j] !== undefined) {
                return rows[k][j];
            };
        }).filter(Boolean);
    });
}

var cols = transpose(rows);

function getModes(cols) {
    var allModes = [];

    for(var i=0; i<cols.length; i++) {
            var modes = {};
        for(var j=0; j<cols[i].length; j++) {
             if(!modes[cols[i][j]]) {
                modes[cols[i][j]] = 1;
            } else {
                modes[cols[i][j]]++;
            }
        }
            allModes.push(getList(modes));
    }

    return allModes;
}

console.log(getModes(cols).map(function(c) {
    return sortDesc(c).map(function(d) {
        return Object.keys(d).toString();
    });
}).map(function(r, i){
    return r[0];
}).join(''));
