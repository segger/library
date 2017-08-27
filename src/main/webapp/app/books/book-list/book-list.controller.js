export default class BookListController {
  constructor(BooksService) {
    this.service = BooksService;
    this.books = [];
  }

  setSelected(item) {
    this.selectedBook = item;
    this.selectedIndex = this.books.indexOf(this.selectedBook);
  }

  remove() {
    this.service.removeBook(this.selectedBook).then((data) => {
      this.books.splice(this.selectedIndex, 1);
    }, (error) => {
      console.log(error);
    });
  }

  $onInit() {
    this.service.getBookList().then((data) => {
      this.books = data;
    }, (error) => {
      console.log(error);
    });
  }
}
