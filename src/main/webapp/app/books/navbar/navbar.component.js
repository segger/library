require('./navbar.css');

class NavbarController {
  constructor(AuthService, $state) {
    this.service = AuthService;
    this.$state = $state;
  }

  login() {
    this.service.setCredentials(this.username, this.password).then(() => {
      this.$state.reload();
    }, (error) => {
      console.log('Navbar', error);
    });
  }
};

module.exports = {
  template: require('./navbar.html'),
  controller: NavbarController,
  controllerAs: 'navbarCtrl',
};
