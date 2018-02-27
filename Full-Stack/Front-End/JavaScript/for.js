//WORKS!!!
console.log("");
console.log("1. Print all numbers between -10 and -19:");

for(var startPt=-10; startPt < 20; startPt++){
	 console.log(startPt);
} 



// WORKS!!!
console.log("");
console.log("2. Print all even numbers between 10 and 40:");

// for(var topEvenNumber = 10; topEvenNumber <= 40; topEvenNumber=topEvenNumber+2){
// 	 console.log(topEvenNumber);
// }

// FASTER
for(var topEvenNumber = 10; topEvenNumber <= 40; topEvenNumber++){

	 if(topEvenNumber % 2 === 0){
	 	console.log(topEvenNumber);
	 }

} 


// WORKS!!!
console.log("");
console.log("3. Print all odd numbers between 300 and 333:");


for(var OddNumber = 300; OddNumber <= 333; OddNumber++){
		if(OddNumber % 2 !== 0){
			console.log(OddNumber);	
		}		 
} 


// WORKS!!!
console.log("");
console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50:");

for(var number = 5; number <= 50; number++){
	if((number % 5 === 0) && (number % 3 === 0)){
			 console.log(number);
	}
} 