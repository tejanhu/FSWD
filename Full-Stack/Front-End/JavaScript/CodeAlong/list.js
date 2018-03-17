var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "list"){
		listTodos();	
	}
	else if(input === "new"){
		addTodo();
	} else if(input === "delete"){
		deleteTodo();
	}

	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("Okay, You Quit The App");

function deleteTodo(){
	//ask for index of todo to be deleted
	var i = prompt("Enter index of todo to delete");
		//delete that todo
		//splice(where to delete, how many items to delete)
		todos.splice(i,1);
		console.log("Deleted Todo");
	}


	function addTodo(){
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("Added Todo");
	}


	function listTodos(){
		console.log("**********");
		todos.forEach(function(todo, index){
			console.log(index +": "+todo);
		});
		console.log("**********");
	}