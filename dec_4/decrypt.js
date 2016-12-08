// To decrypt a room name, rotate each letter forward through the alphabet a number of times equal to the room's sector ID

(function(){
    "use strict";

    var fs = require('fs');

    return new Promise(function(resolve, reject) {
            fs.readFile('input.txt', function(err, data){
                if(err) { throw err; }
                resolve(data.toString().split('\n'));
            });
        }).then(function(rooms) {
            return rooms.filter(helpers.isValidRm);
        }).then(function(validRms) {
            
        });

});