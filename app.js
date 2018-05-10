var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book) {
	book.textContent += ' (book title)';
});

const bookList = document.querySelector("#book-list");
// bookList.innerHTML = '<h2> books and more books </h2>';
bookList.innerHTML += '<p> this is how you add html';