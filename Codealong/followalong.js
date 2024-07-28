const express = require("express");
const app = express();
const port = 3000;
const z = require("zod");
// app.get("/health-checkup",(req,res)=>{
//     const userName = req.headers.user;
//     const password =req.headers.password;
//     const kidneyId = req.query.kidneyId;
    
//     if(!(userName === "ajay" && password === "pass")){
//         res.json({msg: "wrong user"});
//         return
//     }

//     if(!(kidneyId == 1 || kidneyId ==2)){
//         res.json({msg: "wrong number kideneys"})
//         return;
//     }

//     res.json({msg: `${userName} have ${kidneyId} kidney`});

    
// });
const schema = z.array(z.number());

app.use(express.json());

app.post("/health-checkup", (req,res)=>{
    const kideneys = req.body.kideneyId;
    // const kidneyLength = kideneys.length;
    const response = schema.safeParse(kideneys);

    res.send({response});

})

// app.use((err,req,res,next)=>{
//     res.json({
//         msg: " something is up with server"
//     })
// })
app.listen(port,()=>{
    console.log(`listening on this ${port}`)
})