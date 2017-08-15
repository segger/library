export default class Book {
  constructor(resource) {
    this.title = resource.title;
    this.author = resource.author;
    this.href = resource.$href('book');
  }
};
