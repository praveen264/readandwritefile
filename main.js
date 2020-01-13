
// Requiring fs module in which 
// writeFile function is defined. 
const fs = require('fs') 
  
// Data which will write in a file. 
let data = { id:"hgjgjh" }
  
// Write data in 'Output.txt' . 
fs.writeFile('Object.json', data,{flag:'a'}, (err) => { 
      if(data)
		  console.log('datas added successfuly');
    // In case of a error throw err. 
    if (err) throw err; 
}) 


var sampleObject = { id:"hgjgjh" };

fs.writeFile("./object.json", JSON.stringify(sampleObject), {flag:'a'},(err) => {
    if (err) {  console.error(err);  return; };
    console.log("File has been created");
});