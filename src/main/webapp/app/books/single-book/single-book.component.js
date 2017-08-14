require('./single-book.css');

class SingleBookController {
  constructor() {
  }
};

module.exports = {
  template: require('./single-book.html'),
  controller: SingleBookController,
  controllerAs: 'singleBookCtrl',
  bindings: {
    book: '<',
  },
};
