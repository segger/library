import Book from '../book';

export default class SingleBookController {
  constructor(BooksService, $location) {
    this.service = BooksService;
    this.$location = $location;
  }

  submit() {
    let book = new Book(this.title, this.author);
    this.service.addBook(book).then((data) => {
      this.$location.path('/');
    }, (error) => {
      console.log(JSON.stringify(error));
    });
  }
}
