var faker = require('faker');
var tempName = "";

console.log("-- -- -- -- -- -- -- -- -- -- --")
console.log("WELCOME TO MY SHOP!")
console.log("-- -- -- -- -- -- -- -- -- -- --")


for(var i=0; i<10; i++){
    temp = faker.commerce.productName() + " - $" + faker.commerce.price();
    console.log(temp);
}
