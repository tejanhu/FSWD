const express = require("express");
const app = express();

// "/" => "Hi there!"

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!")
//     // console.dir(req)
//     res.send("As salaam Alaikum!");
// })


// Tell express to listen for requests (start server)

app.listen(3000, function(){
    console.log("Listening on port 3000");
});

app.get("/", function(request, response){
    response.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(request, response){
    response.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(request, response){
    response.send("MEOW!");
    console.log("Someone made a request to /dog");
});

app.get("/r/:subredditName", function(request, response){
    var subreddit = request.params.subredditName;
    response.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(request, response){
    console.log(request.params);
    response.send("welcome to the comments page!");
});


app.get("*", function(request, response){
    response.send("You are a star!");
});

app.post("/arabic", (req, res) =>{
res.send({books:"Gateway to Arabic, Al-'Arabiyyatu Bayna Yadayk, Madinah Books, Kitaab Al-Asasi, An-Nahwu Al-Waadih"});
})



