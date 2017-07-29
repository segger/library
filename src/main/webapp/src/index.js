import angular from 'angular';

import bookModule from './book/bookModule';

angular.module('main', [
    bookModule
]);

angular.bootstrap(document.documentElement, ['main']);