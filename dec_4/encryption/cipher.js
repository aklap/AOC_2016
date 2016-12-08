var ALPHABET = require('../constants.js');

function decrypt(cipherText, shift) {
    var chars = cipherText.split('');

    return chars.map(function(c, i) {
        var pos = ALPHABET.indexOf(c),
            letter = (pos+shift)%26;

        return c === '-' ? ' ' : ALPHABET[letter];
    }).join('');
}

module.exports = decrypt;