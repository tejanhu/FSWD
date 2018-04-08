var button = document.querySelector('button');

button.addEventListener("click", toggleCtrl);

function toggleCtrl(){
	var body = document.querySelector('body');

	if(body.style.background === "white"){
		body.style.background = "purple";
	}

	else{

		body.style.background = "white";
		
	}

}



