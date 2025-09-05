const fs = require('fs');
// Asyncronus Method
console.log("Start");
fs.readFile('text1.txt','utf8', (err, data) => {
    if(err) {
        console.log("error: "+err);
    }else{
        console.log(data);
    }
})
console.log("End");

// Synchronus Mryhod
console.log("Start");

try{
    const file = fs.readFileSync('text1.txt', 'utf8');
    console.log("File content: ", file);
}
catch(err) {
    console.log("Error: ", err);
}
console.log("end");
