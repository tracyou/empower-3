package nl.hva.fdmci.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

//	@Bean
//	CommandLineRunner commandLineRunner(UserRepositorie userRepository){
//	  return args -> {
//      User tracy = new User("Tracy", "Tracy123", "something", "title", "description");
//      userRepository.save(tracy);
//    };
//	}
}
