const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/text.txt');

fs.readFile(dirPath, 'utf8', (error, textInf) => {
    if(error) throw error;
    console.log(textInf);
});