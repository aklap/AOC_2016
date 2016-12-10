// The screen is 50 pixels wide and 6 pixels tall, all of which start off

// rect AxB turns on all of the pixels in a rectangle at the top-left of the screen which is A wide and B tall.

// rotate row y=A by B shifts all of the pixels in row A (0 is the top row) right by B pixels. Pixels that would fall off the right end appear at the left end of the row.

// rotate column x=A by B shifts all of the pixels in column A (0 is the left column) down by B pixels. Pixels that would fall off the bottom appear at the top of the column.
var fs = require('fs');
var commands = fs.readFileSync('input.txt').toString().split('\n');

function Screen() {
    var display = [];
    this.dimensions = {width: 50, height: 6};

    // fill the display 
    for(var i=0; i<this.dimensions.height; i++) {
        display.push(new Array(50).fill('.'));
    }

    this.display = display;    
};

//if the line starts w/ 'rect', split on 'x'
Screen.prototype.rect = function(dimensions) {
    var dimensions = dimensions.split('x'); //=> [n of els, rows from row 0]
    // ea row
    for(var i=0; i<dimensions[1]; i++) {
        // each el in a row
        for(var j=0; j<dimensions[0]; j++) {
            this.display[i][j] = '#';
        }
    }
}

Screen.prototype.rotate = function(cmd) {
    var item = cmd.split(' ')[0];
    cmd = cmd.match(/[\d]+/g);

    var target = Number(cmd[0]),
        shift = Number(cmd[1]);

    //get rows
    var rows = this.display;

    // get columns
    var cols = rows[0].map(function(_, i) {
        return rows.map(function(_, j){
            return rows[j][i];
        });
    });

    //helper rotate func
    function rotate(list, shift) {
        while(shift>0) {
            var head = list.pop()
            list.unshift(head);
            shift--;
        }
        return list;
    }

    // if column or row
    if(item == 'column') {
        var rotated = rotate(cols[target], shift);
       
        for(var i=0; i<rows.length; i++){
            rows[i][target] = rotated[i];
        }
    }

    if(item == 'row') {
        var rotated = rotate(rows[target], shift);
       
        for(var i=0; i<rows[target].length; i++){
            rows[target][i] = rotated[i];
        }
    }
}

// display the screen formatted
Screen.prototype.toString = function() {
    return this.display
        .map(function(row) {
            return row.join(' ');
        }).join('\n');
}

var screen = new Screen();

for(var i=0; i<commands.length; i++) {
    var cmd = commands[i].split(' ');
    if(cmd[0] == 'rect') {
        screen.rect(cmd[1]);
    }

    if(cmd[0] == 'rotate') {
        screen.rotate(cmd.slice(1).join(' '));
    }
    console.log('redrawing')
    console.log(screen.toString());
}

var count = screen.toString().split('').filter(function(el){
    return el == '#';
}).length;

console.log(count);