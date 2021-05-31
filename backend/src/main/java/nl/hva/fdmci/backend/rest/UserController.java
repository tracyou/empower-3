package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.errors.PreConditionFailed;
import nl.hva.fdmci.backend.errors.ResourceNotFound;
import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.UserRepositoryJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

  @GetMapping("users/{id}")
  public User getUserById(@PathVariable int id) {
    User selectedUser = repository.findById(id);
    if (selectedUser == null) {
      throw new ResourceNotFound("Id doesn't exist");
    }
    return selectedUser;
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

  @DeleteMapping("users/{id}")
  public boolean delete(@PathVariable int id) throws ResourceNotFound {
    User selectedUser = repository.findById(id);

    if (selectedUser == null) {
      throw new ResourceNotFound("Id:" + id + "doesn't exist");
    }

    return repository.deletedById(selectedUser.getId());
  }
}
