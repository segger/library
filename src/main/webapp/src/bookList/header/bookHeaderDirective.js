import BookHeaderController from './BookHeaderController';

export default function bookHeaderDirective() {
  return {
    controller: BookHeaderController,
    controllerAs: 'bookHeader',
    template: require('./bookHeader.html'),
  };
}
