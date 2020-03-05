var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo");

//Post - title, content
var postSchema = new mongoose.Schema({
    title:   String,
    content: String
});

//User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name:  String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


var Post = mongoose.model("Post", postSchema);

var newUser = new User({
    email: "balamory@bbc.co",
    name: "Balamory Balamory"
});

newUser.posts.push({
    title: "How to make vegan juices",
    content: "Go to ASDA to collect the ingredients!..."
});

newUser.save(function(error, user){
    if(error){
        console.log("Something went wrong!");
    } else{
        console.log(user);
    }
})

// var newPost = new Post({
//     title: "Hello World",
//     content: "Hello Hello Hello World...."
// });

// newPost.save(function(error, post){
//     error ? console.log(error) : console.log(post);
// })

User.findOne({name: "Balamory Balamory"}, function(error, user){
    if(error){
        // console.log(error);
    } else{
        user.posts.push({
            title: "It's tricky !!!", 
            content: " Harry. Harry. Harry.."
        });
        user.save(function(error, user){
            error? console.log(error) : console.log(user);
        });
    }
});