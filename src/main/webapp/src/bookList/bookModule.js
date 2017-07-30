import angular from 'angular';

import bookHeaderDirective from './header/bookHeaderDirective';
import bookListDirective from './list/bookListDirective';

export default angular
    .module('bookList', [])
    .directive('bookHeader', bookHeaderDirective)
    .directive('bookList', bookListDirective)
    .name;
