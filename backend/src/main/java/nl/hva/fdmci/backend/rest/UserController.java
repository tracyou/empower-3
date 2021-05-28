package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.errors.PreConditionFailed;
import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.UserRepositorie;
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

  private final UserRepositorie repository;

  public UserController(UserRepositorie repository) {
    this.repository = repository;
  }

//  private final UserRepository repository = new UserRepository();

  @GetMapping("users")
  public List<User> getAllUsers() {
    return repository.findAll();
  }

//  @GetMapping("users/{id}")
//  public User getUserById(@PathVariable int id) {
//    Optional<User> selectedUser = repository.findById(id);
//    if (selectedUser == null) {
//      throw new ResourceNotFound("Id doesn't exist");
//    }
//    return selectedUser;
//  }

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

//  @DeleteMapping("users/{id}")
//  public boolean delete(@PathVariable int id) throws ResourceNotFound {
//    Optional<User> selectedUser = repository.findById(id);
//
//    if (selectedUser == null) {
//      throw new ResourceNotFound("Id:" + id + "doesn't exist");
//    }
//
//    return repository.deletedById(selectedUser.getId());
//  }
}
