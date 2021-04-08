package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class UserController {

  private final UserRepository repository= new UserRepository();

  @GetMapping("users")
  public List<User> getAllUsers() {

    System.out.println("all users");
    return repository.findAll();
  }

  @PostMapping("users")
  public ResponseEntity<Object> save(@RequestBody User user) {
    User savedUser = repository.save(user);

    URI location = ServletUriComponentsBuilder
      .fromCurrentRequest()
      .path("/{id}")
      .buildAndExpand(savedUser.getId()).toUri();

    return ResponseEntity.created(location).body(savedUser);
  }
}
