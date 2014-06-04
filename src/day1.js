function Document() {
    this.content = 'This is a document';
}

Document.prototype.title = '';
Document.prototype.content = '';
Document.prototype.display = function () {
    console.log(this.content);
}

function Book() {
    Document.call(this);
    this.content += ' (book)';
}

Book.prototype.__proto__ = Document.prototype;
Book.prototype.author = '';

var book = new Book();

book.display();