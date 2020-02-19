var express     = require("express"),
    mongoose    = require("mongoose"),
    bodyParser  = require("body-parser"),
    app         = express();

    //APP CONFIG
    mongoose.connect("mongodb://localhost/restful_blog_app");
    app.set("view engine", "ejs");
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({extended: true}));

    //MONGOOSE/MODEL CONFIG
    var blogSchema = new mongoose.Schema({
        title: String,
        image: String,
        body:  String,
        created: {type: Date, default: Date.now}
    });

    var Blog = mongoose.model("Blog", blogSchema);
    
    //RESTFUL ROUTES

    app.get("/", function(req, res){
        res.redirect("/blogs");
    })
        //INDEX
    app.get("/blogs", function(req, res){
        Blog.find({}, function(error, blogs){
            if(error){
                console.log("ERROR!");
            } else{
                res.render("index", {blogs: blogs});
            }
        })
    });

    app.get("/blogs", function(req, res){
        res.render("index");
    })


    //SHOW


    //UPDATE

    //DELETE/DESTROY

    app.listen(3000, function(){
        console.log("Server running");
    });
    