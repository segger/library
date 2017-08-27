package se.johannalynn.library.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import se.johannalynn.library.domain.model.Role;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private DataSource dataSource;
	
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		String usersByUsernameQuery = "select username, password, true from users where username=?";
		String authoriesByUsernameQuery = "select username, role from users where username=?";
		auth.jdbcAuthentication()
			.usersByUsernameQuery(usersByUsernameQuery)
			.authoritiesByUsernameQuery(authoriesByUsernameQuery)
			.dataSource(dataSource)
			.passwordEncoder(bCryptPasswordEncoder());
	}
	
	@Override
	public void configure(WebSecurity webSecurity) throws Exception {
		webSecurity.ignoring().antMatchers("/hello");
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers("/**").permitAll()
	  	.antMatchers(HttpMethod.POST, "/api/**").hasRole(Role.ADMIN.toString())
	  	.antMatchers(HttpMethod.PUT, "/api/**").hasRole(Role.ADMIN.toString())
	  	.antMatchers(HttpMethod.DELETE, "/api/**").hasRole(Role.ADMIN.toString())
	  	.anyRequest().authenticated()
	  	.and()
	  		.httpBasic()
	   	.and().
	   		csrf().disable();
	}
}
