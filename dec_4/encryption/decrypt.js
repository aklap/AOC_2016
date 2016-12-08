// To decrypt a room name, rotate each letter forward through the ALPHABET a number of times equal to the room's sector ID

var fs = require('fs'),
        helpers = require('../helpers.js'),
        decrypt = require('./cipher.js');

var rooms = fs.readFileSync('../input.txt').toString().split('\n');

var validRms = rooms.filter(helpers.isValidRm);

var names = validRms.map(function(r, i) {
    var shift = helpers.idToNum(r),
        cipherText = r.split('-').slice(0,3).join('-'),
        plaintext = decrypt(cipherText, shift);

    return plaintext;
});

var match = names.map(function(n, i) {
    if(n.match(/northpole/g)) {
        return i;
    }
}).filter(Boolean);

var matchID = Number(/\d+/g.exec(validRms[match])[0]);

console.log(matchID);
return matchID;
