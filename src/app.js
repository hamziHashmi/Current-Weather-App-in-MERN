const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
//publci static path
const stpath=path.join(__dirname,'../public');
const template_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.set('views',template_path);
app.use(express.static(stpath));
hbs.registerPartials(partials_path);


const port=process.env.port || 3000;
//routing
app.get('/',(req,res)=>{
  res.render('index.hbs');
})
app.get('/about',(req,res)=>{
  res.render('about.hbs');
})
app.get('/weather',(req,res)=>{
  res.render('weather.hbs');
})
app.get('*',(req,res)=>{
  res.render('404error.hbs',{
    errorMsg:'Oops ! Page Not Found'
  })
})
app.listen(port,()=>{
    console.log(`App is running at port ${port}`);
})