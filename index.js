const express =require("express")
const app=express()
app.use(express.static('public'))

app.get('/home.html',(req,res)=>{
    res.sendFile(__dirname + "/home.html")
})
app.get('/login.html',(req,res)=>{
    res.sendFile(__dirname + "/login.html")
})
app.get('/enrolledSts.html',(req,res)=>{
    res.sendFile(__dirname + "/enrolledSts.html")
})
app.get('/stsDetails.html',(req,res)=>{
    res.sendFile(__dirname + "/stsDetails.html")
})
app.get('/attendance.html',(req,res)=>{
    res.sendFile(__dirname + "/attendance.html")
})
app.get('/News.html',(req,res)=>{
    res.sendFile(__dirname + "/News.html")
})
app.get('/dashboard.html',(req,res)=>{
    res.sendFile(__dirname + "/dashboard.html")
})
app.get('/faculty.html',(req,res)=>{
    res.sendFile(__dirname + "/faculty.html")
})



app.listen(5500,function(){
    console.log(`Express listening to port 5500`)
})