var md5 = require('md5'),
    input = 'reyedfim';

function decode(encrypted) {
    var password = '',
        index = 0;

    while(password.length < 8) {
        var hashed = md5(input + index);

        if(hashed.match(/^0{5}/)) {
            password += hashed[5];
        }

        index++
    } 

    console.log(password);
    return password;
}

return decode(input);

