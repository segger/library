import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './books.routes.js';
import bookList from './book-list/book-list.component';
import BooksService from './books.service';

export default angular.module('books', [uirouter])
  .config(routes)
  .component('bookList', bookList)
  .service('BooksService', BooksService)
  .name;
