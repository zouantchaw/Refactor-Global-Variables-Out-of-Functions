// bookList should not be altered by any function operation
// the add function should add the given bookName to the end of the array passed to it and return a new array(list)
// The remove function should remove the given bookName from the array passed to it 

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr, bookName) {
  let newArr = new Array(...arr)
  newArr.push(bookName);
  return newArr;
}

function remove (arr, bookName) {
  let newArr = new Array(...arr)
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return [...newArr];

    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);