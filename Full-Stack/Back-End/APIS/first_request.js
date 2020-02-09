var request = require('request');
request('http://www.google.com', function(err, resp, body){
    // if(!err && resp.statusCode == 200){
    //     console.log(body);
    // }
    if(err){
        console.log("SOMETHING WENT WRONG HERE...");
        console.log(err);
    }
    else{
        if(resp.statusCode== 200){
            console.log(body);
        }
    }
});

