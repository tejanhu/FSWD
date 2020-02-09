// const request = require('request');

const request_promise = require('request-promise');


request_promise('https://jsonplaceholder.typicode.com/users/1')
    .then((body)=>{
        const parsedData = JSON.parse(body);
        console.log(`${parsedData.name}  lives in  ${parsedData.address.city} on ${parsedData.address.street} in suite ${parsedData.address.suite} at ${parsedData.address.zipcode}`);
    })
    .catch((err) => {
        console.log('Error!', err);
    })
