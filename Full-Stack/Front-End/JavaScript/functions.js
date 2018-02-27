function isEven(n){
	if(n % 2 === 0){
		return true;
	}
	return false;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));
console.log("");


function factorial(n){
	if(n<=1){
		return 1;
	}
	return n*factorial(n-1);
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

