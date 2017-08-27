export default class AuthService {
  constructor($cookies, $http, $q) {
    this.$cookies = $cookies;
    this.$http = $http;
    this.$q = $q;

    this.cookieKey = 'auth_data';
    this.setBasicAuth();
  }

  setBasicAuth() {
    let cookieData = 'Basic ' + this.$cookies.get(this.cookieKey);
    this.$http.defaults.headers.common['Authorization'] = cookieData;
  }

  setCredentials(username, password) {
    return this.$q((resolve, reject) => {
      let encodedCredentials = btoa(username + ':' + password);
      this.$cookies.put(this.cookieKey, encodedCredentials);
      this.setBasicAuth();
      resolve();
    });
  }

  clearCredentials() {
    return this.$q((resolve, reject) => {
      this.$cookies.remove(this.cookieKey);
      this.setBasicAuth();
    });
  }
}
AuthService.$inject = ['$cookies', '$http', '$q'];
