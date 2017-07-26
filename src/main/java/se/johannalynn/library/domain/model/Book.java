package se.johannalynn.library.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "books")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@NotNull
	private String title;
	
	@NotNull
	private String author;
	
	public Book() {
		
	}
	
	public Book(String title, String author) {
		this.title = title;
		this.author = author;
	}
	
	public long getId() {
		return id;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getAuthor() {
		return author;
	}
	
	@Override
	public String toString() {
		return String.format("Book[id=%d, title='%s', author='%s']",
				id, title, author);
	}
}
