const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/text.txt');

let stream = new fs.ReadStream(dirPath, {encoding: 'utf-8'});

stream.on('readable', function(){
  let textInf = stream.read();
  if(textInf != null){
      console.log(textInf);
    }
});
 
stream.on('end', function(){
    console.log("end");
});
stream.on('error', function(err){
    if(err.code == 'ENOENT'){
        console.log("Файл не найден");
    }else{
        console.error(err);
    }
});