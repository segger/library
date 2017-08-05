export default class BooksService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;

    let basePath = '/api/books';
    let dev = DEV ? '.json' : '';

    this._getBookListPath = basePath + dev;
  }

  getBookList() {
    return this.$q((resolve, reject) => {
      this.$http.get(this._getBookListPath).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }
}
