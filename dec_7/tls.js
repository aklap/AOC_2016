var fs = require('fs');

// array of strs
var lines = fs.readFileSync('input.txt').toString().split('\n');

//takes array of strings, returns lines that dont have an abba in brackets
function sanitize(lines) {
    var sanitized = [];

    for(var i=0; i<lines.length; i++) {
        var line = lines[i];

        //an array of strings
        var brackets = line.match(/[\[][\w]+[\]]/g);
        //for each bracket found
        var valid = true;
        for(var j=0; j<brackets.length; j++) {
            var bracket = brackets[j]
            var inside = bracket.substring(1, bracket.length-2);
            var letters = inside.split('');
            //if the inside chars don't have an abba return the line
            for(var k=0; k<letters.length; k++) {
                if(hasAbba(letters, k) == true) {
                    valid = false;
                }
            }
        }

        if(valid == true) {
            sanitized.push(line);
        }
    }

    return sanitized;
}

var sanitized = sanitize(lines);

// remove any of the brackets in valid lines, since we know they don't have the abba
function format(lines) {
    return lines.map(function(l) {
        return l.split(/[\[][\w]+[\]]/).join('');
    });
}
var formatted = format(sanitized);

// checks each line in lines for abba in valid sections and returns an array of the matches
function getTLS(lines) {
    var haveTLS = [];
    //ea line
    for(var i=0; i<lines.length; i++) {
        var found = false;
        // console.log(lines[i]);
        
        // each char in a line
        for(var j=0; j<lines[i].length; j++) {
            var letters = lines[i].split('');
            if(hasAbba(letters, j)) {
                found = true;
            }
        }

        if(found == true) {
            haveTLS.push(lines[i]);
        }
    }

    return haveTLS;
}

console.log(getTLS(formatted).length);

// helper that slices each line into pairs of chars and then returns bool if they are abba
function hasAbba(chars, j) {
    var first = chars.slice(j, j+2).join(''),
        sec = chars.slice(j+3, j+5).join('');

        if((first == sec.split('').reverse().join('')) && (first !== sec)) {
            console.log([first, sec, (first == sec.split('').reverse().join('')) && (first !== sec)]);
            return [first, sec, (first == sec.split('').reverse().join('')) && (first !== sec)];
        }

}

