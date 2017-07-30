import angular from 'angular';

import './index.less';

import bookModule from './bookList/bookModule';

angular.module('main', [
  bookModule,
]);

angular.bootstrap(document.documentElement, ['main']);
