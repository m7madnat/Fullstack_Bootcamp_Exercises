const book = {
    Name: "Game of Thrones",
    Writer: "George R. R. Martin",
    ReleaseDate: "1996",    
    Revision:  "2011",
    isHardCover: true
}

function bookDesc(book) {
    return `The book ${book.Name} was written by ${book.Writer} in ${book.ReleaseDate} and revised in ${book.Revision}.`
}

console.log(book)
console.log(bookDesc(book))