// // actually v3

// var titles = document.getElementsByClassName('title');


// // titles is an "HTMLCollection" see __proto__ .
// console.log(Array.isArray(titles));
// // to turn it into an array use Array.from()
// console.log(Array.isArray(Array.from(titles)));

// // turn HTMLCollection into an array and run the forEach method on it
// Array.from(titles).forEach(function(item){
// 	console.log(item);
// });


// v4

const wmf = document.querySelector("#book-list li:nth-child(2) .name").innerHTML;
console.log(wmf);