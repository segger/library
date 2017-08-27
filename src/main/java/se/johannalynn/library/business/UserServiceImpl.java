package se.johannalynn.library.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import se.johannalynn.library.domain.IUserRepository;
import se.johannalynn.library.domain.model.User;

public class UserServiceImpl implements UserService {

	@Autowired
	private IUserRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
}
