var express=require("express");
var app=express();

app.get('/',function(req,res){
	console.log("Response from cluter process ID: "+process.pid);
    res.end("Welcome to my cluter demo "+process.pid);
});

app.listen(3000,function(){
	console.log("Running at PORT 3000");
});