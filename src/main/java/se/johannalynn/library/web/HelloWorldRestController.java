package se.johannalynn.library.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldRestController {

	@RequestMapping("/hello")
	public String helloworld() {
		return "hello";
	}
}
