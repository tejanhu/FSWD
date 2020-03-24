var express     = require('express'),
    app         = express(), 
    bodyParser  = require("body-parser"), 
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground")
    seedDB      = require("./seeds");




mongoose.connect("mongodb://localhost/yelp_camp_v4");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

app.get("/", function(req, res){
    res.render("landing");
});



    // Campground.create(
    //     {
    //         name: "Granite Hill",
    //         image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
    //         description: "This is a huge granite hill, no bathrooms. No water. Just a beautiful granite!"
    //     }, function(error, campground){
    //     if(error){
    //         console.log(error);
    //     } else{
    //         console.log(campground);
    //     }
    // } );


// INDEX - FETCH ALL CAMPGROUNDS FROM DB
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(error, allCampgrounds){
        if(error){
            console.log(error);
        } else{
            res.render("campgrounds/index", {campgrounds:allCampgrounds});
        }
    } )
    // res.render("campgrounds", {campgrounds:campgrounds});
});




// CREATE - ADD NEW CAMPGROUNDS TO DB
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
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

// NEW - SHOW NEW CAMPGROUNDS FORM TO CREATE NEW CAMPGROUND
app.get("/campgrounds/new", function(req, res){
    res.render("/campgrounds/new");
});


// SHOW - FETCH INFO ABOUT ONE CAMPGROUND FROM DB
app.get("/campgrounds/:id", function(req, res){
    // Get info about campground from DB with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(error, foundCampground){
        if(error){
                    console.log(error);
        } else{
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
            }
    });  
    // Render show template with that campground

  

    // Campground.find({}, function(error, campground){
    //     if(error){
    //         console.log(error);
    //     } else{
    //         res.render("campgrounds", {campgrounds:allCampgrounds});
    //     }
    // } )
    // res.render("campgrounds", {campgrounds:campgrounds});
});



// ===========================
// COMMENTS ROUTES
// ===========================

app.get("/campgrounds/:id/comments/new", function(req, res){

    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else{
            res.render("comments/new", {campground: campground});
        }
    });

});



app.listen(3000, function(){
    console.log("YelpCamp Server has Started!");
});