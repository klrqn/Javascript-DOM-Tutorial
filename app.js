const booklist = document.querySelector("#book-list");


// traverse up
console.log('the parent node is: ', booklist.parentNode);
console.log('the parent element is: ', booklist.parentElement.parentElement);


console.log(booklist.childNodes);
// this gets all child Elements, not all childnodes, which includes all \n returns
// between elements. so use .children ..
console.log(booklist.children);