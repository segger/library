package se.johannalynn.library.business;

import se.johannalynn.library.domain.model.User;

public interface UserService {

	User findByUsername(String username);
}
