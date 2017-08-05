export default class BooksService {
  constructor($http) {
    console.log('construct books service');
    this.$http = $http;
  }

  callPokemons() {
    return this.$http.get('https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json');
  }

  getName() {
    return 'hej ';
  }
}
