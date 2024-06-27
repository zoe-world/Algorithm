let input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (a > b) return console.log(">");
else if (a < b) return console.log("<");
else return console.log("==");
