var numbers = [1,2,3,4];
var letters = ['a','b','c'];

var some_numbers = [1,1,1,1];
var other_numbers = [2,1,1,1];

var some_letters = ['a','b','p'];
var other_letters = ['b','b','b'];

var numarr_1 = [1,2,3];
var numarr_2 = [10,3,10,4];
var numarr_3 = [-5,100];

//WORKS!!
function printReverse(arr){
	for (var i = arr.length-1; i>=0; i--) {
		console.log(arr[i]);
	} 
}

//WORKS!!
function isUniform(some_arr){
	for(var i = 0; i<some_arr.length; i++){
		for(var j = 1; j>i; j++){
			if(some_arr[i]==some_arr[j]){
				return(true);
			}
			else{
				return(false);
			}
		}
	}
}

//WORKS!!
function sumArray(a_arr){
	var sum = 0;
	for(var i = 0; i<a_arr.length;i++){
		sum = a_arr[i] + sum;
	}
	return sum;
}

//WORKS!!
function max(some_numarr){
	//variable storing biggest number
	var max = 0;
	//iterate through array
	for(var i = 0; i<some_numarr.length;i++){
		// check if element in array > max -> store element in max
		if(some_numarr[i]>max){
			max = some_numarr[i];
		}
	}
	return max;
}