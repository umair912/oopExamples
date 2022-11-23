// Constructor
function Book( title, author, year){
    this.title = title,
    this.author = author,
    this.year = year
}

// get Summary
Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Instatiate an Object
const book1 = new Book('book One', 'Ali', '2016');
const book2 = new Book('book Two', 'Asad', '2018');

console.log(JSON.stringify(book1.getSummary()));
console.log(book2.getSummary());
console.log(book2);