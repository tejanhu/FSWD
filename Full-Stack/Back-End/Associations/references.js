var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo_2");

//Post - title, content
var postSchema = new mongoose.Schema({
    title:   String,
    content: String
});

//User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name:  String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }]
});
var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);


// Post.create({
//     title: "How to cook the best Egusi soup Pt 3",
//     content: "blah blah blah blah"
// }, function(err, post){
//     User.findOne({email: "liz@yahoo.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else{
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else{
//                     console.log(data);
//                 }
//             });
//         }
//     })
// });

//Find user
//find all posts for that user

User.findOne({email: "liz@yahoo.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else{
        console.log(user);
    }
});



 