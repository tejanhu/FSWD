function isEven(n){
	return(n % 2 === 0);
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));
console.log("");


// function factorial(n){
// 	if(n<=1){
// 		return 1;
// 	}
// 	return n*factorial(n-1);
// }

// UNIQUE SOLUTION:
function factorial(n){
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for (var i = 2; i <= n; i++) {
		result = result * i;
	}
	// return the result variable
	return result;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));
console.log("");

function kebabToSnake(str){

	var new_str = str.replace(/-/g, "_");

	return new_str;
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));

