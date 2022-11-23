class Book{
    constructor(title, author, year){
        this.title = title,
        this.author = author,
        this.year = year
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    static topBookStore(){
        return 'New Book depo';
    }
}

// Magzine SubClass
class Magzine extends Book {
    constructor(title, author, year, month){
        super(title, author, year);
            this.month = month
    }

}

// Instatiate Magzine
const magzine1 = new Magzine('Digest', 'unkonwn author', '2021', 'Dec');
const book1 = new Book('Book One', 'Auth', '2018')
console.log(magzine1)
console.log(magzine1.getSummary())
console.log(book1)