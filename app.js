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
	console.log(value);
});