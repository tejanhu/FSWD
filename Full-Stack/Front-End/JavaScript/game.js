// create secretNumber
var secretNumber = 4; 

//ask user for guess
var stringGuess = prompt("GUESS A NUMBER");
var guess = Number(stringGuess);

//check guess
if(guess === secretNumber){
	alert("YOU GOT IT RIGHT!");
}
//otherwise, check if higher
else if(guess > secretNumber){
	alert("TOO HIGH. GUESS AGAIN!")
}

//otherwise, check if lower
else{
	alert("TOO LOW. GUESS AGAIN!")
}