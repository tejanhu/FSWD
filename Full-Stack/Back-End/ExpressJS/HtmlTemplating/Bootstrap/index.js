const express = require("express");
const app = express();
const path = require("path");
const umrahData = require("./data.json");
// Do not need to call ejs package, package will already exist in node_modules
app.set("view engine", "ejs");
// Allows you to run file from anywhere outside the directory
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/arabicLearningBooks", (req, res) => {
    const arabic_books = [
        "Al 'Arabiyyatu Bayna Yadayk", "Madinah Book", "An-Nahwu Al-Waadih", "An-Nahwu As-Sagheer", "Tamreen At-Tulaab", "Qasas An-Nabiyyeen"
    ]

    res.render ("arabic_books", {arabic_books})
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/packages/:umrahpackages", (req, res) => {
    const { umrahpackages } = req.params;
    const data = umrahData[umrahpackages];
    if(data){
        res.render('umrahpackages', { ...data }); 
    } else{
        res.render("notfound", {umrahpackages});
    }
   
});

app.get("/rand", (req, res) => {
    const random_num = Math.floor(Math.random() * 1000) + 45 + 32
    res.render('random', {rand_number: random_num});
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

