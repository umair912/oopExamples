
// Object Literal
const book1 = {
    title: "Book One",
    author: "Ali",
    year: "2016",
    getSummary: function (){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 = {
    title: "Book Two",
    author: "Asad",
    year: "2010",
    getSummary: function (){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(JSON.stringify(book1))
console.log(book1.getSummary())
console.log(JSON.stringify(book2))