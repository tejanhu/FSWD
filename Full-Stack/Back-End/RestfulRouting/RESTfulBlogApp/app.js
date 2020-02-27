var express         = require("express"),
    methodOverride  = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    mongoose        = require("mongoose"),
    bodyParser      = require("body-parser"),
    app             = express();

    //APP CONFIG
    mongoose.connect("mongodb://localhost/restful_blog_app");
    app.set("view engine", "ejs");
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(expressSanitizer());
    app.use(methodOverride("_method"));

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
    //INDEX ROUTE
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

    //NEW ROUTE
    app.get("/blogs/new", function(req, res){
        res.render("new");
    });

    //CREATE ROUTE
    app.post("/blogs", function(req, res){
        //create blog
        req.body.blog["body"] = req.sanitize(req.body.blog["body"]);
        Blog.create(req.body.blog, function(error, newBlog){
            if(error){
                res.render("new");
            } else{
                 //redirect to the index
                res.redirect("/blogs");
            }
        });
       
    });
    
    //SHOW ROUTE
    app.get("/blogs/:id", function(req, res){
        Blog.findById(req.params.id, function(error, foundBlog){
            if(error){
                res.redirect("/blogs");
            } else{
                res.render("show", {blog: foundBlog});
            }
        })
    });

    //EDIT ROUTE
    app.get("/blogs/:id/edit", function(req, res){
        Blog.findById(req.params.id, function(error, foundBlog){
            if(error){
                res.redirect("/blogs");
            } else{
                res.render("edit", {blog: foundBlog});
            }
        });
    });

    //UPDATE ROUTE
    app.put("/blogs/:id", function(req, res){
        req.body.blog["body"] = req.sanitize(req.body.blog["body"]);
        Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(error, updatedBlog){
            if(error){
                res.redirect("/blogs");
            } else{
                res.redirect("/blogs/" +req.params.id);
            }
        });
    });

    //DELETE/DESTROY ROUTE
    app.delete("/blogs/:id", function(req, res){
        //destroy blog or redirect somewhere
        Blog.findByIdAndRemove(req.params.id, function(error){
           error ? res.redirect("/blogs"):res.redirect("/blogs");
        })
    });



    app.listen(3000, function(){
        console.log("Server running");
    });
    