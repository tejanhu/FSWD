var age = prompt("What is your age?");

//NEG NUMBER CONDITIONAL TEST
if(age < 0){
	console.log("Error: Negative!");
}

else if(age === 21){
	console.log("happy 21st birthday!!");
}
// ODD NUMBER CONDITIONAL TEST 
else if((age % 2) === 1){
	console.log("your age is odd!");
}

// PERFECT SQUARE NUMBER CONDITIONAL TEST 
if(age % Math.sqrt(age) === 0){
	console.log("perfect square!");
}