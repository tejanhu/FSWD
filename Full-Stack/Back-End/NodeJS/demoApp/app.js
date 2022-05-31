const cat = require('cat-me');
const joke = require('knock-knock-jokes');
const jokes = require('give-me-a-joke');
const colors = require('colors');

console.log(cat());
console.log(joke());
jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
})
