require('./single-book.css');
import SingleBookController from './single-book.controller';

module.exports = {
  template: require('./single-book.html'),
  controller: SingleBookController,
  controllerAs: 'singleBookCtrl',
};
