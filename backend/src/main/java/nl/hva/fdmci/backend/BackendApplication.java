package nl.hva.fdmci.backend;

import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.UserRepository;
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

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

  @Transactional
  @Override
  public void run(String... args) throws Exception {
    System.out.println("Running testdata");
    this.createInitialUsers();
  }

  private void createInitialUsers() {
    List<User> users = this.userRepository.findAll();

    if (users.size() > 0) return;
    System.out.println("Configuring some intial user data");

    for (int i = 0; i < 3; i++) {
      User user = User.createInitialUser();
      user = this.userRepository.save(user);
      System.out.println("wooooowwww");
    }
  }
}
