var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment.js");

var data = [
    {  name: "Cloud's Rest", 
        image: "https://cdn.pixabay.com/photo/2018/12/24/22/21/camping-3893598_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {  name: "Someone's Camp Rest", 
        image: "https://cdn.pixabay.com/photo/2019/06/28/03/07/camping-4303357_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {  name: "Kids' Camp Rest", 
        image: "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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