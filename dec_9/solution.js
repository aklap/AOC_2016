// take a marker by regex (.*)

// split the marker on 'x'
// marker[1] is the number of times to repeat the char(s)
// marker[0] is the the number of chars afer the marker to repeat

var fs = require('fs');
var lines = fs.readFileSync('test.txt').toString().split('\n');

var markers = lines.map(function(l) {
    return l.match(/[\(][\w]+[\)]/g);
});


var decompressed = markers.map(function(lines, m, i){
    if(m == null) {
        return lines[i];
    };

    var result = '';
    // an array of string matches
    var sects = lines[i].match(/[\(][\w]+[\)][\w]+/g);
    var ops = sects.map(function(s) {
        var nChars = s.match(/[\d{1}\d{1}]/g);
        // var mode = s.match(/[\d{1}\d{1}]/g)[1];
        console.log(nChars);
        return nChars;
    });
    console.log(ops)


    // for each match in m
    // console.log(nChars, mode, lines[i])
}.bind(this, lines));

console.log(decompressed);