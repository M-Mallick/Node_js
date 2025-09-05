// create a new folder
const fs = require('fs');
fs.mkdir("G:\\WEAB_DEVELOPMENT\\Backend With JS\\Node js\\Path Module\\CCC\\BBB\\NNN", { recursive: true }, (err) => {
    if(err) {
        console.log("Something went wrong");
    }
})
