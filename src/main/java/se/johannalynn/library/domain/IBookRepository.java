package se.johannalynn.library.domain;

import org.springframework.data.repository.CrudRepository;

import se.johannalynn.library.domain.model.Book;


public interface IBookRepository extends CrudRepository<Book, Long> {

}
