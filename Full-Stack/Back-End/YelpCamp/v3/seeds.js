var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment.js");

var data = [
    {  name: "Cloud's Rest", 
        image: "https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c7d2b7ed6974bc650_340.jpg",
        description: "blah blah blah"
    },
    {  name: "Someone's Camp Rest", 
        image: "https://pixabay.com/get/54e5dc474355a914f6da8c7dda793f7f1636dfe2564c704c7d2b7ed6974bc650_340.jpg",
        description: "blah blah blahblah blah"
    },
    {  name: "Kids' Camp Rest", 
        image: "https://pixabay.com/get/52e3d5404957a514f6da8c7dda793f7f1636dfe2564c704c7d2b7ed6974bc650_340.jpg",
        description: "blah bblah lahblahblah blah"
    }
]


function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }   else{
                    console.log("Added a campground");
                    //create a comment on each campground
                    Comment.create({
                        text: "This place is great, but I wish I had internet",
                        author: "Timmy"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment!");
                        }
                    
                    });
                }
                    
            })
        });
    });
  
   

    // add a few comments


}

module.exports = seedDB;