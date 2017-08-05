export default class BookListController {
  constructor(BooksService) {
    this.service = BooksService;
  }

  $onInit() {
    this.service.getBookList().then((data) => {
      console.log(JSON.stringify(data));
    }, (error) => {
      console.log(JSON.stringify(error));
    });
  }
}

