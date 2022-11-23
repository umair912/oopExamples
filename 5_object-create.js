// Object of Protos
const bookProtos = {
    getSummary: function (){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year
        return `${this.title} Has been on self for ${years} years`;
    }
}

// Create Object
const book1 = Object.create(bookProtos)
book1.title = "Book One";
book1.author = "Ali";
book1.year = "2016";

console.log(book1);

// Create Object 2nd Method
const book2 = Object.create(bookProtos, {
    title: { value: 'Book Two' },
    author: { value: 'Asad' },
    year: { value: '2019' }
});

console.log(book2.getSummary());