// My initial solution:
var films = [
{
	title: '"In Bruges"',
	rating: 5,
	hasWatched: true
},
{
	title: '"Frozen"',
	rating: 4.5,
	hasWatched: false
},
{
	title: '"Mad Max Fury Road"',
	rating: 5,
	hasWatched: true
},
{
	title: '"Les Miserables"',
	rating: 3.5,
	hasWatched: false
},{
	title: '"Die Hard I"',
	rating: 5,
	hasWatched: true
},
{
	title: '"Lethal Weapon I"',
	rating: 5,
	hasWatched: false
},
{
	title: '"Die Hard II"',
	rating: 5,
	hasWatched: false
},
{
	title: '"Lethal Weapon II"',
	rating: 4.5,
	hasWatched: false
}
]

for(var i=0; i<films.length; i++){
	if(films[i].hasWatched){
		console.log("You have watched "+films[i].title+" - "+films[i].rating+" stars");
	}else{
		console.log("You have not seen "+films[i].title+" - "+films[i].rating+" stars");
	}
}

console.log("\n");

var movies = [
{
	title: "In Bruges",
	rating: 5,
	hasWatched: true
},
{
	title: "Frozen",
	rating: 4.5,
	hasWatched: false
},
{
	title: "Mad Max Fury Road",
	rating: 5,
	hasWatched: true
},
{
	title: "Les Miserables",
	rating: 3.5,
	hasWatched: false
},{
	title: "Die Hard I",
	rating: 5,
	hasWatched: true
},
{
	title: "Lethal Weapon I",
	rating: 5,
	hasWatched: false
},
{
	title: "Die Hard II",
	rating: 5,
	hasWatched: false
},
{
	title: "Lethal Weapon II",
	rating: 4.5,
	hasWatched: false
}
]


function buildStr(movie){
	var res = "You have ";
	if(movie.hasWatched){
		res+="watched ";
	}else{
		res+="not seen ";
	}
	res+="\""+movie.title+"\" - ";
	res+= movie.rating +" stars";
	return res;
}

movies.forEach(function(movie){
	console.log(buildStr(movie));
});


