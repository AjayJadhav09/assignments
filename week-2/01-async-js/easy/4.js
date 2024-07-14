let fs = require('fs');
let data = "What the fuckumean";
fs.writeFile("./Hello.text", data, {
    encoding : 'utf-8',
},
(err) =>{
    console.log(err);
})


fs.readFile("./Hello.text", "utf-8",function(err, data){
    console.log(data + " MF");
});

for (let index = 0; index < 5555; index++) {
    console.log("why");   
}