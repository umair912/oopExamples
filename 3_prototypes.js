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

// get age
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} Has been on self for ${years} years`;
}

// Revise / Change Year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

// Instatiate an Object
const book1 = new Book('book One', 'Ali', '2016');
const book2 = new Book('book Two', 'Asad', '2018');

console.log(JSON.stringify(book1.getSummary()));
console.log(book2.getSummary());
console.log(book2.getAge());
book2.revise('2017');
console.log(book2);