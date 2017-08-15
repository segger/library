require('./edit-modal.css');

class EditModalController {
  constructor(BooksService) {
    this.service = BooksService;
  }

  save() {
    this.service.saveBook(this.book).then((data) => {
      //TODO handle?
    }, (error) => {
      console.log(JSON.stringify(error));
    });
  }
};

module.exports = {
  template: require('./edit-modal.html'),
  controller: EditModalController,
  controllerAs: 'editModalCtrl',
  bindings: {
    book: '<',
  },
};
