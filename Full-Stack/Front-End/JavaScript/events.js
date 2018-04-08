var button = document.querySelector('button');
var isPurple = false;
button.addEventListener("click", function(){
	
	if(isPurple){
		document.querySelector('body').style.background = "white";
	}
	else{
		document.querySelector('body').style.background = "purple";
	}
	isPurple = !isPurple;
});






