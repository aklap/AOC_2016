var md5 = require('md5');
var input = 'reyedfim';
var password = '';
//an increasing integer index that starts at 0
var index = 0;

//until password.length == 8
//keep searching for matching hash
while(password.length < 8) {
// hash the input + index as one string
    var hashed = md5(input + index);
    // send result to hexadecimal
    //if the result begins with 5 zeros
    if(hashed.match(/^0{5}/)) {
        //password += the 6th char in result
        password += hashed[5];
    }

    index++
} 

console.log(password);
return password;
