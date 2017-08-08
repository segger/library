export default class SingleBookController {
  constructor(BooksService) {
    this.service = BooksService;
  }

  $onInit() {
    console.log('init single book controller');
    /*
    this.service.getBookList().then((data) => {
      this.books = data;
    }, (error) => {
      console.log(JSON.stringify(error));
    });*/
  }
}

