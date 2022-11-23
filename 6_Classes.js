class Book{
    constructor(title, author, year){
        this.title = title,
        this.author = author,
        this.year = year
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year
        return `${this.title} Has been on self for ${years} years`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'New Book depo';
    }
}

const book1 = new Book('Book One', 'Auth', '2018')

console.log(book1)
console.log(book1.getSummary())
book1.revise('2019')
console.log(book1)
console.log(book1.getAge())
console.log(Book.topBookStore())