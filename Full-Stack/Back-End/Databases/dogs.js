var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/dog_app");

var dogSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        breed: String
    }
);

var Dog = mongoose.model("Dog", dogSchema);



//adding a new dog to the DB

// var billy = new Dog({
//     name: "Sally",
//     age: 8,
//     breed: "Brindle Boxer"
// });

// billy.save(function(error, dog){
//     if(error){
//         console.log("Something went wrong!");
//     }
//     else{
//         console.log("We just saved a dog to the DB:");
//         console.log(dog);
//     }
// });

Dog.create({
    name: "Smithy", 
    age: 7, 
    breed: "British Bulldog"
}, function(error, dog){
    if(error){
        console.log(error);
    } else{
        console.log(dog);
    }
});

//retrieve all dogs from the DB and console.log each one

Dog.find({}, function(error, dogs){
    if(error){
        console.log("OH NO ERROR!");
        console.log(error);
    } else{
        console.log("ALL THE DOGS:");
        console.log(dogs);
    } 
});