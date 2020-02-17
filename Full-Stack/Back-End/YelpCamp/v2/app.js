var express     = require('express'),
    app         = express(), 
    bodyParser  = require("body-parser"), 
    mongoose    = require("mongoose");

app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("landing");
});

//SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);


app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(error, allCampgrounds){
        if(error){
            console.log(error);
        } else{
            console.log("SUCCESSFULLY FOUND THE DATA:");
            res.render("campgrounds", {campgrounds:allCampgrounds});
        }
    } )
    // res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
   // CREATE A NEW campground and save to the DB
   Campground.create(newCampground, function(error, newlyCreated){
       if(error){
           console.log(error);
       } else{
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
       }
   });
  
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});



app.listen(3000, function(){
    console.log("YelpCamp Server has Started!");
});