// 1) Query Selector using Id
var p1qSid = document.querySelector('#first');
console.log(p1qSid.innerText);
// 2) Query Selector using Class
var p1qSclass = document.querySelector('.special');
console.log(p1qSclass.innerText);
// 3) getElementById
var p1gEid = document.getElementById('first');
console.log(p1gEid.innerText);
// 4) getElementsByClassName
var p1gEclass = document.getElementsByClassName('special');
console.log(p1gEclass[0].innerText);
// 5) getElementsByTagName
var p1gEtag = document.getElementsByTagName('p');
console.log(p1gEtag[0].innerText);