const { count } = require("console");
const express = require("express")
const app = express()
const path = require('path');
const MongoClient=require('mongodb').MongoClient
app.use(express.json())
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname, '/public')));
var totalStds;
var totalFac;
var semesterStds;
var allStds;
    MongoClient.connect('mongodb://0.0.0.0:27017/',{useNewUrlParser:true , useUnifiedTopology: true},function(error,result){
        if (error )throw error
        database=result.db("CSE_Management")
        console.log("CONNECTION")
        database.collection("admin").findOne({},function(error,result){
            if (error )throw error;
            console.log(result);
        })
        let stds=database.collection("students");
        stds.count().then((count)=>{
            console.log(count);
            totalStds=count;            
        })
        let fac=database.collection("instructors");
        fac.count().then((count)=>{
            console.log(count);
            totalFac=count;            
        })
        
        database.collection("students").find({semester:"Semester 1"}).toArray(function(error,result){
            if(error) throw error;
            // console.log(result);
            allStds=result;
            // result.forEach(function(students) {
            //     stdsID.push(students);
            //     // let idArray=stdsID.toArray();
            //     // console.log(stdsId);
            // });   
            console.log(allStds);   

        });    
    
    })

app.get('/home', (req, res) => {
    res.render("home",{totalStds:totalStds, totalFac:totalFac})
    // res.sendFile(__dirname + "/views/home.html")
})

// app.get('/views/login.html', (req, res) => {
app.get('/login', (req, res) => {
    res.render("login")
    // res.sendFile(__dirname + "/views/login.html")
})
// app.get('/views/enrolledSts.html', (req, res) => {
app.get('/enrolledSts', (req, res) => {
    res.render("enrolledSts")
    // res.sendFile(__dirname + "/views/enrolledSts.html")
})
// app.get('/views/stsDetails.html', (req, res) => {
app.get('/stsDetails', (req, res) => {
    res.render("stsDetails",{allStds:allStds})
    // res.sendFile(__dirname + "/views/stsDetails.html")
})
// app.get('/views/attendance.html', (req, res) => {
app.get('/attendance', (req, res) => {
    res.render("attendance")
    // res.sendFile(__dirname + "/views/attendance.html")
    // res.sendFile(__dirname + "/public/attendance.css")
})
// app.get('/views/News.html', (req, res) => {
app.get('/News', (req, res) => {
    res.render("News")
    // res.sendFile(__dirname + "/views/News.html")
})
// app.get('/views/dashboard.html', (req, res) => {
app.get('/dashboard', (req, res) => {
    res.render("dashboard")
    // res.sendFile(__dirname + "/views/dashboard.html")
})
// app.get('/views/faculty.html', (req, res) => {
app.get('/faculty', (req, res) => {
    res.render("faculty")
    // res.sendFile(__dirname + "/views/faculty.html")
})

app.listen(5800, function () {
    console.log(`Express listening to port 5500`)
})