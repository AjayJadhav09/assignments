let fs = require('fs');

fs.readFile("./Hello.text", "utf-8",function(err, data){
    console.log(data + "MF");
});

for (let index = 0; index < 5555; index++) {
    
    console.log("why");   
}