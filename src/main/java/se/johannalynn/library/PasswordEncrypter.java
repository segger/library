package se.johannalynn.library;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncrypter {

	public static void main(String[] args) {
		String password = args[0];
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(password);

		System.out.println(hashedPassword);
	}
}
