export default function routes($stateProvider) {
  $stateProvider
    .state('books', {
      url: '/',
      template: require('./books.html'),
    });
}
