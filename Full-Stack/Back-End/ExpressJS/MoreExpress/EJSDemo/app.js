var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
}); 

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar : thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "How to find a job without experience?", author: "Zaid"},
        {title: "How to master cv writing?", author: "Sumaiya"},
        {title: "How to ace an interview?", author: "Saleh"}
    ]
    res.render("posts", {posts: posts});
});



app.listen(3000, function(){
    console.log("Server is listening.");
});
