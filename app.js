// var titles = document.getElementsByClassName('title');

// Array.from(titles).forEach(title => {
//     console.log(title);
// });

//const wrap = document.querySelector('#wrapper');
//console.log(wrap);

//const wrp = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wrp);

//hanya 1 yang di return
//var books = document.querySelector('#book-list li .name');
// console.log(books);

//semua buku
//books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book) {
//     //ganti semua judul dengan text
//     //book.textContent = 'Text';

//     //tambahkan judul dengan text
//     book.textContent += '{book - title)'
// });

//const bookList = document.querySelector('#book-list');
//isi dari html child
//console.log(bookList.innerHTML);
//bookList.innerHTML = '<h2>Books and more books...</h2>';

//tambahkan booklist
//bookList.innerHTML += '<p>This is how you Add Html</p>';

//nodes
//const banner = document.querySelector('#page-banner');

//console.log('#page-banner node type is : ', banner.nodeType);
//console.log('#page-banner node name is : ', banner.nodeName);
//console.log('#page-banner has child nodes : ', banner.hasChildNodes());

//const clonedBanner = banner.cloneNode(false);
//kalo true semua isi children diclone, kalo false hanya  element saja
//console.log(clonedBanner);

// const bookList = document.querySelector('#book-list');

// console.log('the parent node is : ', bookList.parentNode);
// console.log('the parent element is : ', bookList.parentElement.parentElement);

// console.log(bookList.childNodes);

// console.log('book-list next sibling is : ', bookList.nextSibling);
// console.log('book-list next element sibling is : ', bookList.nextElementSibling);

// console.log('book-list previous sibling is : ', bookList.previousSibling);
// console.log('book-list previouse element sibling is : ', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone else';


// var h2 = document.querySelector('#book-list h2');
// console.log(h2);

//event listener
// h2.addEventListener('click', function(e) {
//     console.log(e.target);
//     console.log(e);
// });


// var btns = document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// });

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent , ' was prevented'); 
// });

//event bubbling
// const list = document.querySelector('#book-list ul');
// list.addEventListener('click', function(e){
//     if(e.target.className === 'delete') {
//         const li = e.target.parentElement;
//         li.parentElement.removeChild(li);
//     }
// });


//add book-list
const list = document.querySelector('#book-list ul');
const addForm = document.forms['add-book'];

//delete books
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
    if(hideBox.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
})



