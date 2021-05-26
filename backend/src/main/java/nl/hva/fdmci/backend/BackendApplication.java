package nl.hva.fdmci.backend;

import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.UserRepositorie;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(UserRepositorie userRepository){
	  return args -> {
      User tracy = new User("Tracy", "Tracy123", "something", "title", "description");
      userRepository.save(tracy);
    };
	}
}
