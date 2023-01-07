const fs = require('fs');
// read files 
fs.readFile('../data/readfile.txt', 'utf-8',(err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// write file
const writeText = "hai"
fs.writeFile('../data/readfile.txt', writeText ,err=>{
  if (err) {
    console.error(err);
  }
})

// create directory

if(!fs.existsSync('./assets')){
fs.mkdir('../assets', err =>{
  if(err) {
    console.error(err);
  }
  console.log('file was created');
})
}else{
  fs.rmdir('./assets', err =>{
    if(err){
      console.error(err);
    }
  })
}