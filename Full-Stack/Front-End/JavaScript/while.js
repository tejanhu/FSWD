//WORKS!!!
console.log("");
console.log("1. Print all numbers between -10 and -19:");
var startPt = -10;
var endPt = -19;

while(startPt>=endPt){

	 console.log(startPt);

	 startPt-=1;
} 



// WORKS!!!
console.log("");
console.log("2. Print all even numbers between 10 and 40:");
var topEvenNumber = 10;
var bottomEvenNumber = 40;


while(topEvenNumber<=bottomEvenNumber){

	 console.log(topEvenNumber);

	 topEvenNumber+=2;
} 


// WORKS!!!
console.log("");
console.log("3. Print all odd numbers between 300 and 333:");
var OddNumber = 300;

while(OddNumber <= 333){
	
		if(OddNumber % 2 === 1){
			console.log(OddNumber);	
		}

		OddNumber+=1;
		 
} 


// WORKS!!!
console.log("");
console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50:");
var number = 5;

while(number <= 50){

	if((number % 5 === 0) && (number % 3 === 0)){
			 console.log(number);
	}

	 number+=1;
} 