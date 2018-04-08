var lis = document.querySelectorAll("li");


for(var i=0; i<lis.length; i++){
	lis[i].addEventListener("click",function(){
		this.classList.toggle("done");
	});
}


for (var i = 0; i<lis.length; i++) {
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});
}

for (var i = 0; i<lis.length; i++) {
	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});
}


