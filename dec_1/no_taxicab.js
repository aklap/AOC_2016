var fs = require('fs');
function clean(dir) {
    return dir.trim();
}

var map = fs.readFileSync('./input.txt').toString().trim().split(',').map(clean);

// begin looking North
var bearing = 'North';

// position will determine which direction I'm facing
var directions = ['North', 'East', 'South', 'West'];

// start at 0,0
var position = [0, 0];

// go over ea dir in directions
//     if L change position[0]
//         else change position[1] 
//             print last position

for(var i=0; i<map.length; i++) {
    var dir = map[i];

    if(dir[0] === 'L') {
        position[0] = position[0]-dir.slice(1);
    } else {
        position[1]
    }
}

console.log(position);

module.exports = {
    clean: clean
};