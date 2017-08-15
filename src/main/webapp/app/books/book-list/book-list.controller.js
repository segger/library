export default class BookListController {
  constructor(BooksService) {
    this.service = BooksService;
    this.books = [];
  }

  setSelected(item) {
    this.selectedBook = item;
  }

  $onInit() {
    this.service.getBookList().then((data) => {
      this.books = data;
    }, (error) => {
      console.log(JSON.stringify(error));
    });
  }
}

