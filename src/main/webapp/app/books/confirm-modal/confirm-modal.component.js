class ConfirmModalController {
  constructor() {
  }

  confirm() {
    this.onConfirm();
  }
};

module.exports = {
  template: require('./confirm-modal.html'),
  controller: ConfirmModalController,
  controllerAs: 'confirmModalCtrl',
  bindings: {
    onConfirm: '&',
  },
};
