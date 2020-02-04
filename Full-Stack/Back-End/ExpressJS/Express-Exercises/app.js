var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:title", function(req, res){
    var comment = "";

    if(req.params.title === "pig"){
        comment = 'Oink';
    }
    else if(req.params.title === "cow"){
        comment = 'Moo';
    }

    else{
        comment = 'Woof Woof!';
    }

    res.send("The " + req.params.title + " says " + comment);
});

app.get("/repeat/:title/:id", function(req, res){
    var responseBody = "";
     for(var i=0; i<req.params.id; i++){
         responseBody+= " "+ req.params.title;
    }
    res.send(responseBody);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen("3000", function(){
    console.log("Listening on port 3000");
})