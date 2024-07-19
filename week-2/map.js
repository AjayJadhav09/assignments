const { log } = require("console");

const arr = [1,2,3,4,5,6,7];

const newArr = arr.map( (num) =>{
    return num *10;
})

const filArr = arr.filter((num)=>{
    if(num % 2 == 0) return true;
    else return false;
})


console.log(newArr);
console.log(filArr);