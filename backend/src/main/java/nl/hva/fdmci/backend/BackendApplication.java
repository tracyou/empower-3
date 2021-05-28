package nl.hva.fdmci.backend;

import nl.hva.fdmci.backend.models.TrainingModule;
import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.TrainingModuleRepository;
import nl.hva.fdmci.backend.repositories.UserRepositoryJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.transaction.Transactional;
import java.util.List;


@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

  @Autowired
  private UserRepositoryJpa userRepository;

  @Autowired
  private TrainingModuleRepository moduleRepository;

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
