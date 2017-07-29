import angular from 'angular';
import bookList from './bookList/bookList';

export default angular
    .module('book', [])
    .directive('bookList', bookList)
    .name;