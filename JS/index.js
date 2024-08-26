const fs = require('fs');

//own async function
function divyaReadFile() { 
    console.log("inside divya Read File")
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data);
            console.log("after resolve");
        });
    })
}

//callback function to call
function onDone(data) {
    console.log(data);
}

divyaReadFile().then(onDone);



//promise syntax
// let p = new Promise(function(resolve) {
// 	resolve("hi there");
// });

// p.then(function() {
// 	console.log(p);
// })