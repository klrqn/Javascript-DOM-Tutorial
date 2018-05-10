const booklist = document.querySelector("#book-list");

console.log(`booklist's next sibling is ${booklist.nextSibling}, using the nextSibling method`);
console.log(`booklist's next element sibling is ${booklist.nextElementSibling}, using the nextSibling method`);

console.log(booklist.nextElementSibling);
console.log(booklist.nextElementSibling.innerHTML);


console.log('=====================');

console.log(booklist.previousSibling);
console.log(booklist.previousElementSibling);

console.log('=====================');

booklist.previousElementSibling.querySelector("p").innerHTML += '<br> Too Cool For Everyone Else </br>';