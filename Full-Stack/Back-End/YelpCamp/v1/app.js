var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("landing");
})

var campgrounds = [
    { name: "Haddock Creek", image: "https://pixabay.com/get/52e7d0454d55a814f6da8c7dda793f7f1636dfe2564c704c7d2e7fd19544c55d_340.jpg" },
    { name: "Hunting Spurse", image: "https://pixabay.com/get/52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c7d2e7fd19544c55d_340.jpg" },
    { name: "Sandy Camel's Rest", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2e7fd19544c55d_340.jpg" }
]

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});



app.listen(3000, function(){
    console.log("YelpCamp Server has Started!");
});