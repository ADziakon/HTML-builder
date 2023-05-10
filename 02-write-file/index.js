const readline = require('readline');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/text.txt');
let stream = new fs.ReadStream(dirPath, {encoding: 'utf-8'});
let writeStream = new fs.createWriteStream(dirPath, {encoding: 'utf-8'});
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
// 
if(!dirPath){
    // fs.open(dirPath, 'w', (err) => {
    //     if(err) throw err;
    // });
    console.log('create');
    fs.open(dirPath, 'w');
}

console.log('Введите текст для записи в файл:');
stream.on('readable', function(){
    // let textInf = stream.read();
    // let newText = '';
    rl.on('line', (input) => {
        // textInf += input;
        writeStream.write(input);
        writeStream.write('\n');
        //if(err) throw err;
      });
  });


  //rl.close();




