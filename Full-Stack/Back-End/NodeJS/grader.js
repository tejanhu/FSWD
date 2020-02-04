function average(scores){
    var sum=0;
    for(var index=0; index<scores.length; index++){
        sum += scores[index];
    }
    var avg = sum/scores.length;
    // console.log(avg);
    return Math.round(avg);
}

// function average(scores){
//     var sum=0;
//     for(var index=0; index<scores.length; index++){
//         sum += scores[index];
//     }
//     var avg = sum/scores.length;
//     console.log(avg);
//     return Math.round(avg);
// }

var scores = [90, 98, 89, 100, 100, 86, 94]

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]

console.log(average(scores));
console.log(average(scores2));

