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
    //ganti semua judul dengan text
    //book.textContent = 'Text';

    //tambahkan judul dengan text
    book.textContent += '{book - title)'
});

const bookList = document.querySelector('#book-list');
//isi dari html child
//console.log(bookList.innerHTML);
//bookList.innerHTML = '<h2>Books and more books...</h2>';

//tambahkan booklist
bookList.innerHTML += '<p>This is how you Add Html</p>';
