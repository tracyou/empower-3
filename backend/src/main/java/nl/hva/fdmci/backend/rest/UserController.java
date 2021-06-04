package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.errors.PreConditionFailed;
import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.UserRepositoryInterface;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

  private final UserRepositoryInterface repository;

  public UserController(UserRepositoryInterface repository) {
    this.repository = repository;
  }

  @GetMapping("users")
  public List<User> getAllUsers() {
    return repository.findAll();
  }

  @GetMapping("users/{id}")
  public Optional<User> getUserById(@PathVariable int id) {
    return repository.findById(id);
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
