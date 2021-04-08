package nl.hva.fdmci.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;


@SpringBootApplication
@EntityScan("nl.hva.fdmci.backend.domain")
@EnableJpaRepositories("nl.hva.fdmci.backend")
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@GetMapping
	public String test(){
	  return "test test 123";
  }
}
