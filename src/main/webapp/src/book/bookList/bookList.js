import BookListController from './BookListController';

export default function bookList() {
    return {
        controller: BookListController,
        controllerAs: 'bookList',
        template: require('./bookList.html'),
    };
}