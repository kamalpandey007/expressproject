const path=require('path');
const express=require('express');
const app=express();
const staticpath=path.join(__dirname,'../public');
app.use(express.static(staticpath));

app.get('/',(req,res)=>{
res.write("<h1>welcome to Express</h1>");
res.write("<h1>welcome to Node  Js</h1>");
res.send();
})
app.get('/about',(req,res)=>{
    res.status(200).send("welcome to about us");
    })
app.get('/contact',(req,res)=>{
    res.send("welcome to Contact us");
    })

    app.get('/temp',(req,res)=>{
        
        res.json([{
            id:1,
            name:"kamal",
            address:null,
            phone:9452775143
        },
        {
            id:1,
            name:"kamal",
            address:null,
            phone:9452775143
        },
        {
            id:1,
            name:"kamal",
            address:null,
            phone:''
        },
        {
            id:1,
            name:"kamal",
            address:null,
            phone:9452775143
        }
    
    
    
    ]);
        })
            
app.listen(8080);