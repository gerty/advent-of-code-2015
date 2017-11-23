//const http = require('http');
const fs = require("fs");
console.log("testing with filename input-day02.txt");
fs.open('input-day02.txt','r',(err, fd) => {
    // => null, <fd>
});
//url = 'https://adventofcode.com/2015/day/2/input';
//http.open("GET", url, true);
var data = JSON.parse(xmlhttp.responseText);
console.log(data);