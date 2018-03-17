var movie = [
{
	title: '"In Bruges"',
	rating: 5,
	hasWatched: true
},
{
	title: "Frozen",
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

for(var i=0; i<movie.length; i++){
	if(movie[i].hasWatched){
		console.log("You have watched "+movie[i].title+" - "+movie[i].rating+" stars");
	}else{
		console.log("You have not seen "+movie[i].title+" - "+movie[i].rating+" stars");
	}
}

