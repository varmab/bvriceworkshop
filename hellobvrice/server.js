var express=require("express");
var app=express();

var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/bvriceworkshop")

var studentSchema=mongoose.Schema({
    name: String,
    age: Number
})
var Student=mongoose.model('Student',studentSchema,"students");

app.get("/api/students",function(req,res){
    Student.find({},function(err,students){
        if(err) res.send(err);
        res.send(students)
    })
})

app.use(express.static("public"));

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/public/contact.html")
// })

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/public/index.html")
// })

// app.get("/contact",function(req,res){
//     res.sendFile(__dirname + "/public/contact.html")
// })

// app.get("/about",function(req,res){
//     res.sendFile(__dirname + "/public/about.html")
// })

app.listen(5000,function(){
    console.log("Server is started")
});
