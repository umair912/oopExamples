// Book Constructor
function Book( title, author, year){
    this.title = title,
    this.author = author,
    this.year = year
}

// get Summary
Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Magzine Construtor
function Magzine(title, author, year, month){
    Book.call(this, title, author, year),
    this.month = month
}

// inherit prototype
Magzine.prototype = Object.create(Book.prototype)

// instatisate the magzine object
const magzine1 = new Magzine('Digest', 'unkonwn author', '2021', 'Dec');
console.log(magzine1.getSummary());

// Magzine Construtor
Magzine.prototype.construtor = Magzine;

console.log(magzine1)

