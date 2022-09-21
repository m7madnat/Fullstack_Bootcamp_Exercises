const firstBook = {
    name: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    year: 1937
}
const secondBook = {
    name: "The Eye of the World",
    author: "Robert Jordan",
    year: 1954
}
const bookUtils = {}
bookUtils.getFirstPublished = function (firstBook, secondBook) {
    return firstBook.year < secondBook.year ? firstBook : secondBook;
};
bookUtils.setNewEdition = function (book, editionYear) {
    book.latestEdition = editionYear;
};
bookUtils.setLanguage = function (book, language) {
    book.language = language;
};
bookUtils.setTranslation = function (book, language, translator) {
    book.translation = {
        language: language,
        translator: translator
    }
};
bookUtils.setPublisher = function (book, name, location) {
    book.publisher = {
        name: name,
        location: location
    }
};
bookUtils.isSamePublisher = function (firstBook, secondBook) {
    return firstBook.publisher.name === secondBook.publisher.name &&
        firstBook.publisher.location === secondBook.publisher.location;
};


bookUtils.setNewEdition(firstBook, 2017);
bookUtils.setLanguage(firstBook, "English");
bookUtils.setTranslation(firstBook, "Arabic", "Mohammad");
bookUtils.setPublisher(firstBook, "Random House", "USA");
bookUtils.setNewEdition(secondBook, 2015);
bookUtils.setLanguage(secondBook, "English");
bookUtils.setTranslation(secondBook, "Arabic", "Mohammad");
bookUtils.setPublisher(secondBook, "Random House", "USA");


console.log(bookUtils.getFirstPublished(firstBook, secondBook));
console.log(bookUtils.isSamePublisher(firstBook, secondBook));