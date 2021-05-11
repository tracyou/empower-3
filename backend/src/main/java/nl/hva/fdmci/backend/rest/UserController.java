package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.PreConditionFailed;
import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.UserRepository;
import nl.hva.fdmci.backend.repositories.UserRepositoryJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class UserController {

  @Autowired
  private final UserRepositoryJpa repository= new UserRepositoryJpa();

  @GetMapping("users")
  public List<User> getAllUsers() {
    return repository.findAll();
  }

  @PostMapping("users")
  public ResponseEntity<Object> save(@RequestBody User user) throws PreConditionFailed {
    List<User> userList = repository.findAll();
    for (User user1 : userList) {
      if (user1.getUsername().equals(user.getUsername())){
        throw new PreConditionFailed("Username should be unique");
      }
    }
    User savedUser = repository.save(user);

    URI location = ServletUriComponentsBuilder
      .fromCurrentRequest()
      .path("/{id}")
      .buildAndExpand(savedUser.getId()).toUri();

    return ResponseEntity.created(location).body(savedUser);
  }
}
