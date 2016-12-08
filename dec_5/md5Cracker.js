var md5 = require('md5'),
    input = 'reyedfim';

function getPassword(input) {
    var password = new Array(8).fill('-'),
        index = 0;

    function isValid(pos) {
        pos = Number(pos);

        return pos >= 0 && pos <= 7 && password[pos] === '-';
    }

    while(password.includes('-')) {
        var hashed = md5(input + index);

        if(hashed.match(/^0{5}/)) {
            var pos = hashed[5];

            if(isValid(pos)) {
                var char = hashed[6];

                password.splice(pos, 1, char);
            }
        }

        index++
    } 

    console.log(password.join(''));
    return password.join('');
}

return getPassword(input)
