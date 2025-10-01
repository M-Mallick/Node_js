const path = require('path');
const fs = require('fs');

// console.log(__filename); // To get the file path
// console.log(__dirname);

// Folder name (Directory Name)
// console.log("Folder Name: ",path.dirname(__filename));
// console.log(path.dirname(__filename) == __dirname);

// File Name
// console.log("File Name: ",path.basename(__filename));

// Extension of File
// console.log("Extension: ",path.extname(__filename));

// All the above details with one statement
// console.log(path.parse(__filename));

// Jion
// const fullPath = path.join(__dirname, 'public', 'images', 'logo.png');
// console.log(fullPath);

// create a new folder
// let p = path.join(__dirname, "Mridu", "Mallick");
// fs.mkdir(p, { recursive: true }, (err) => {
//     if(err) {
//         console.log("Something went wrong");
//     }
//     console.log("successfully created");
// })

// Create file
let p = path.join(__dirname, 'text1.txt');
fs.writeFile(p, 'Hello World!', (err) => {  // Empty string as content
    if(err) {
        console.log("Something went wrong", err);
    } else {
        console.log("File created successfully");
    }
});
