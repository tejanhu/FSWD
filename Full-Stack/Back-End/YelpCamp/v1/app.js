var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        { name: "Haddock Creek", image: "https://pixabay.com/get/52e7d0454d55a814f6da8c7dda793f7f1636dfe2564c704c7d2e7fd19544c55d_340.jpg" },
        { name: "Hunting Spurse", image: "https://pixabay.com/get/52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c7d2e7fd19544c55d_340.jpg" },
        { name: "Sandy Camel's Rest", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2e7fd19544c55d_340.jpg" }
    ]

    res.render("campgrounds", {campgrounds:campgrounds});
})

app.listen(3000, function(){
    console.log("YelpCamp Server has Started!");
});