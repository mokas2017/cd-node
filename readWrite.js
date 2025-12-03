// readWrite.js
const fs = require('fs');
//create a file named welcome.txt and write 'Hello Node' into it
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  err? console.log(err) : console.log('File created ');
});
//read the content of welcome.txt and log it to the console
 fs.readFile('welcome.txt', "utf8", (err, data) => {
    err? console.log(err) : console.log(data);

});