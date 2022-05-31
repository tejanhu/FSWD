const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const umrahpackages = [
{
    travelAgency: "Sharif Tours",
    location: "Leicester"
},
{
    travelAgency: "Ihsaan Tours",
    location: "Upton Park"
},
{
    travelAgency: "Amaana Tours",
    location: "East Ham"
},
{
    travelAgency: "Umrah & Hajj Tours",
    location: "Barking"
}
];

app.get('/umrahpackages', (req, res) => {
    res.render('umrahpackages/index', {umrahpackages});
});

app.get('/umrahpackages/new', (req, res) => {
    res.render('umrahpackages/new');
});

app.post('/umrahpackages', (req, res) => {
   const {travelAgency, location} = req.body;
   umrahpackages.push({travelAgency, location});
   res.redirect("/umrahpackages");
});

app.get('/packages', (req, res) => {
    res.send("GET /packages response");
});

app.post('/packages', (req, res) => {
    const { dates, price } = req.body;
    res.send(`OK, here are the available dates: ${dates} for the following price: £${price}`);
});

app.listen(3000, () => {
    console.log("ON PORT 3000!");
});