import BooksService from '../books.service';

export default class BookListController {
  constructor(BooksService) {
    console.log('construct controller with ' + BooksService.getName());
  }
}

