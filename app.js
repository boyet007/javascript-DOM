// var titles = document.getElementsByClassName('title');

// Array.from(titles).forEach(title => {
//     console.log(title);
// });

const wrap = document.querySelector('#wrapper');
//console.log(wrap);

const wrp = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wrp);

//hanya 1 yang di return
var books = document.querySelector('#book-list li .name');
// console.log(books);

//semua buku
books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(book) {
    console.log(book);
});