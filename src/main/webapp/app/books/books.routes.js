import AddBookController from './add-book/add-book.controller';

export default function routes($stateProvider) {
  $stateProvider
    .state('books', {
      url: '/',
      template: require('./books.html'),
    })
    .state('add', {
      url: '/add',
      template: require('./add-book/add-book.html'),
      controller: AddBookController,
      controllerAs: 'addBookCtrl',
    });
}
