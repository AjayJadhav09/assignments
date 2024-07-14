let d = 0;
function counter(){
    d +=1;
    console.log(d);
    setTimeout(counter, 1000);
}
counter();