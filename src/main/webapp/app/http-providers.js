export default function httpProviders($httpProvider) {
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}
httpProviders.$inject = ['$httpProvider'];
