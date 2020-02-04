var express = require("express");

var app = express();
// "/" => "Hi there!"
app.get("/", function(request, response){
    response.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(request, response){
    response.send("Goodbye!");
})

// "/dog" => "MEOW!"
app.get("/dog", function(request, response){
    response.send("MEOW!");
})
// Tell express to listen for requests (start server)

app.listen(3000, function(){
    console.log("Listening on port 3000");
})