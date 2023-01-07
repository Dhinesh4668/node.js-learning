const fs = require('fs') 

const readStream = fs.createReadStream('../data/readfile.txt', {encoding : 'utf-8'});

readStream.on('data', (chunk)=>{
    console.log('\t====gost=====');
    console.log("======this is dhinesh=======");
    console.log(chunk);
});