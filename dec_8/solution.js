// modules
var fs = require('fs');
// read lines
    commands = fs.readFileSync('input.txt').toString().split('\n');

function Screen() {
    var display = [];

    this.dimensions = {
        width: 50, 
        height: 6
    };

    this.display = display;    

    // fill the display 
    for(var i=0; i<this.dimensions.height; i++) {
        display.push(new Array(50).fill('.'));
    }
}

Screen.prototype.rect = function(dimensions) {
    dimensions = dimensions.split('x');

    var height = dimensions[1],
        width = dimensions[0]; 
    
    for(var i=0; i < height; i++) {
        for(var j=0; j < width; j++) {
            this.display[i][j] = '#';
        }
    }
};

Screen.prototype.rotate = function(cmd) {
    var item = cmd.split(' ')[0],
        cmd = cmd.match(/[\d]+/g),
        target = Number(cmd[0]),
        shift = Number(cmd[1]);

    //helper rotate func
    function rotate(list, shift) {
        while(shift > 0) {
            var head = list.pop();
            list.unshift(head);
            shift--;
        }

        return list;
    }

    //get rows
    var rows = this.display;

    // get columns
    var cols = rows[0].map(function(_, i) {
            return rows.map(function(_, j){
                return rows[j][i];
            });
        });
    

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
};

// display the screen formatted
Screen.prototype.toString = function() {
    return this.display
        .map(function(row) {
            return row.join(' ');
        }).join('\n');
};

// instantiate new screen object
var screen = new Screen();

// execute all commands
for(var i=0; i<commands.length; i++) {
    var cmd = commands[i].split(' ');

    cmd[0] == 'rect' ? screen.rect(cmd[1]) : screen.rotate(cmd.slice(1).join(' '));
}

// solution I
var count = screen.toString().split('').filter(function(el){
    return el == '#';
}).length;

console.log('\n\nSolution Pt. I: \n' + count, 'Solution Pt. II: \n', '\n' + screen.toString());
return [count, screen.toString()];