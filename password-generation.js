// password-generation.js
var generator = require('generate-password');

var password = generator.generate({
    // set the password length
	length: 10,
    //include numbers in the password
	numbers: true
});

// for example 'uEyMTw32v9'
console.log(password);