import './bookList.less';

import BookListController from './BookListController';

export default function bookListDirective() {
  return {
    controller: BookListController,
    controllerAs: 'bookList',
    template: require('./bookList.html'),
  };
}
