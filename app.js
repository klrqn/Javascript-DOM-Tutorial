const list = document.querySelector("#book-list ul");

// delete books
list.addEventListener('click', function(e){
	if (e.target.className === 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

// to query forms
document.forms
// returns an HTMLCollection of all forms.
document.forms['add-book']; // add id to query

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	console.log('default submit reload prevented');

	const value = addForm.querySelector('input[type="text"]').value;

	// create elements
	const li = document.createElement('li');
	const bookname = document.createElement('span');
	const deleteBtn = document.createElement('span');

	// add content
	deleteBtn.textContent = "delete";
	bookname.textContent = value;
	// deleteBtn.className = "delete";
	// bookname.className = "name";

	// add classes
	bookname.classList.add('name');
	deleteBtn.classList.add('delete');

	// append to document
	li.appendChild(bookname);
	li.appendChild(deleteBtn);
	list.appendChild(li);

});

// change any attribute
// .getAttribute .setAttribute .hasAttribute .removeAttribute
