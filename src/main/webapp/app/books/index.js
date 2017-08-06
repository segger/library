import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularHal from 'angular-hal';

import routes from './books.routes.js';
import halConfigure from './books.hal.js';
import bookList from './book-list/book-list.component';
import BooksService from './books.service';

export default angular.module('books', [uirouter, angularHal])
  .config(routes)
  .config(halConfigure)
  .component('bookList', bookList)
  .service('BooksService', BooksService)
  .name;
