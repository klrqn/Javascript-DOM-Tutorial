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

// hide books
const hidebox = document.querySelector("#hide")

hidebox.addEventListener('change', function(e) {
	if (hidebox.checked)
		list.style.display = "none";
	else
		list.style.display = "initial";
});


// searchbar
const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e) {
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).forEach(function(book) {
		const title = book.firstElementChild.textContent;

		if (title.toLowerCase().indexOf(term) != -1 )	{
			book.style.display = "block";
		} else {
			book.style.display = "none";
		}

	});
});

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
	alert('clicked')
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {  // not shonw in video
      if(panel == targetPanel){
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});