const readline = require('readline');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/text.txt');
let writeStream = new fs.createWriteStream(dirPath, {encoding: 'utf-8', flags: "a"});
let stream = new fs.createReadStream(dirPath, {encoding: 'utf-8'});
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });

console.log('Введите текст для записи в файл:');
  rl.on('line', (input) => {
    writeStream.write(input);
    writeStream.write('\n');
  });





