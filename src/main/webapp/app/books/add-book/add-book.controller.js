import Book from '../book';

export default class AddBookController {
  constructor(BooksService, $location) {
    this.service = BooksService;
    this.$location = $location;

    this.book = {};
  }

  submit() {
    this.service.addBook(this.book).then((data) => {
      this.$location.path('/');
    }, (error) => {
      console.log(error);
    });
  }
}
