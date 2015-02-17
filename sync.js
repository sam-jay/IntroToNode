//var greeter = require('./greeter');
//greeter.greet('Sam');
//greeter.shout('Sam');
var fs = require('fs');
// console.log(fs);
console.log(fs.readFileSync('./file1.txt').toString());
