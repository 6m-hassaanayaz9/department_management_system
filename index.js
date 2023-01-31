const express =require("express")
const app=express()
const path = require('path');
app.use(express.static(path.join(__dirname,'/public')));

app.get('/views/home.html',(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})
app.get('/views/login.html',(req,res)=>{
    res.sendFile(__dirname + "/views/login.html")
})
app.get('/views/enrolledSts.html',(req,res)=>{
    res.sendFile(__dirname + "/views/enrolledSts.html")
})
app.get('/views/stsDetails.html',(req,res)=>{
    res.sendFile(__dirname + "/views/stsDetails.html")
})
app.get('/views/attendance.html',(req,res)=>{
    res.sendFile(__dirname + "/views/attendance.html")
    res.sendFile(__dirname + "/public/attendance.css")
})
app.get('/views/News.html',(req,res)=>{
    res.sendFile(__dirname + "/views/News.html")
})
app.get('/views/dashboard.html',(req,res)=>{
    res.sendFile(__dirname + "/views/dashboard.html")
})
app.get('/views/faculty.html',(req,res)=>{
    res.sendFile(__dirname + "/views/faculty.html")
})



app.listen(5500,function(){
    console.log(`Express listening to port 5500`)
})