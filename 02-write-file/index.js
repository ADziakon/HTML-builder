const readline = require('readline');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/text.txt');
//fs.open(dirPath, 'w');
fs.open(dirPath, 'w', (err) => {
    if(err) throw err;
    console.log('File created');
});