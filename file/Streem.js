const fs = require('fs') 

const readStream = fs.createReadStream('../data/readfile.txt', {encoding : 'utf-8'});
const WriteStreem = fs.createWriteStream('../data/weiteStreem.txt')

readStream.on('data', (chunk)=>{
    console.log('\t====gost=====');
    console.log("======this is dhinesh=======");
    console.log(chunk);
    WriteStreem('\n hai dhiensh')
    WriteStreem.write(chunk);

    console.log(chunk);
});

readStream.pipe(WriteStreem)