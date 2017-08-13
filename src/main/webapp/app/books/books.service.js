export default class BooksService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;

    let basePath = '/api/books';
    let dev = DEV ? '.json' : '';

    this._getBookApiPath = basePath + dev;
  }

  getBookList() {
    return this.$q((resolve, reject) => {
      this.$http.get(this._getBookApiPath).then((resource) => {
        resource.$request().$get('books').then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
      }, (error) => {
        reject(error);
      });
    });
  }

  addBook(book) {
    return this.$q((resolve, reject) => {
      this.$http.post(this._getBookApiPath, book).then((resource) => {
        resolve(resource);
      }, (error) => {
        reject(error);
      });
    });
  }
}
BooksService.$inject = ['$http', '$q'];
