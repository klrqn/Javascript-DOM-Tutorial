const wmf = document.querySelector("#book-list li:nth-child(2) .name").innerHTML;
//console.log(wmf);

var books = document.querySelectorAll('#book-list li .name');
// console.log(book);

var book = document.querySelector('#book-list li .name');
// console.log(book);

Array.from(books).forEach(function(book){
	console.log(book);
});