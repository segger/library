class EditModalController {
  constructor(BooksService) {
    this.service = BooksService;
  }

  save() {
    this.service.editBook(this.book).then((data) => {
      
    }, (error) => {
      console.log('EditModal', error);
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
