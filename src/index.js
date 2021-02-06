const path=require('path');
const express=require('express');
const hbs=require('hbs');
//const { request } = require('http');
const requests=require('requests');

const app=express();
const port=process.env.PORT || 8080;
const staticpath=path.join(__dirname,'../public');
const partialpath=path.join(__dirname,'./templates/partials');
const templatepath=path.join(__dirname,'./templates/views');
app.set('view engine','hbs');
hbs.registerPartials(partialpath);
app.set("views",templatepath);
app.use(express.static(staticpath));

app.get("",(req,res)=> {
    res.render("index",{chanelname:"Kamal",aboutus:"About Us"});
})

app.get("/about",(req,res)=> {
    res.render("about",{chanelname:"Kamal",aboutus:"About Us"});
})

app.get("/temp",(req,res)=> {
    res.render("temp");
    //http://api.openweathermap.org/data/2.5/weather?q=Delhi&unit=metric&appid=9fb2c8c419689cdefe5c8dc729b8c5a1
    // requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=9fb2c8c419689cdefe5c8dc729b8c5a1`).on("data",(chunk)=> {
    //     const objdata=JSON.parse(chunk);
    //     const arrData=[objdata];
    //     console.log(arrData[0].main.temp)
    //    // res.render("temp",{chanelname:"Kamal",aboutus:"About Us",cityname:arrData[0].name,temp:arrData[0].main.temp});
    //     // const realTimeData=arrData.map((val)=>replaceval(homeFile,val)).join("");
    //     res.write(`<h1>City Name: ${arrData[0].name} and tempture ${arrData[0].main.temp}</h1>`);
    //     }).on("end",(err)=> {
    //     if(err) return consol.log('connection closed due to error',err)
    //     res.end();
    //     });
   // res.render("temp",{chanelname:"Kamal",aboutus:"About Us"});
})

app.get("/contact",(req,res)=> {
    res.render("contact",{chanelname:"Kamal",aboutus:"About Us"});
})
app.get("*",(req,res)=> {
   // res.status(400).render("404",{chanelname:"Kamal",aboutus:"About Us"});
   res.render("404",{errorcomment:'oops page not found click here'});
})


// app.get('/about',(req,res)=>{
//  res.send("about");
// })
app.listen(port);