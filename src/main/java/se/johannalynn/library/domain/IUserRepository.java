package se.johannalynn.library.domain;

import org.springframework.data.jpa.repository.JpaRepository;

import se.johannalynn.library.domain.model.User;

public interface IUserRepository extends JpaRepository<User, Long>{

	User findByUsername(String username);
}
