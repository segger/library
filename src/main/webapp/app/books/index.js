require('./books.css');

import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularHal from 'angular-hal';

import routes from './books.routes.js';
import halConfigure from './books.hal.js';
import navbar from './navbar/navbar.component';
import bookList from './book-list/book-list.component';
import editModal from './edit-modal/edit-modal.component';
import confirmModal from './confirm-modal/confirm-modal.component';
import singleBook from './single-book/single-book.component';
import BooksService from './books.service';

export default angular.module('books', [uirouter, angularHal])
  .config(routes)
  .config(halConfigure)
  .component('navbar', navbar)
  .component('bookList', bookList)
  .component('editModal', editModal)
  .component('confirmModal', confirmModal)
  .component('singleBook', singleBook)
  .service('BooksService', BooksService)
  .name;
