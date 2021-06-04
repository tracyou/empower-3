package nl.hva.fdmci.backend;

import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.UserRepositoryInterface;
import nl.hva.fdmci.backend.rest.UserController;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @author of tests 1, 2, 3 and 4 is taherabalhas
 */

@SpringBootTest
public class TestUserRepository {

  @Autowired
  UserRepositoryInterface repository;

  @Autowired
  UserController controller;

  @Test
  @Order(1)
  void testAddUser() {
    User user = new User("tahera", "Tahera123!", "Initiative", "Go Green", "very cool");
    controller.save(user);
    assertNotNull(user);
    controller.getUserById(user.getId());
    assertEquals("tahera", user.getUsername());
  }

  @Test
  @Order(2)
  void testGetAllUsers() {
    List<User> users = controller.getAllUsers();
    assertEquals(users.size(), 4);
  }

  @Test
  @Order(3)
  void testGetUser() {
    Optional<User> user = repository.findById(8);
    assertEquals("balhast", user.get().getUsername());
  }

  @Test
  @Order(4)
  void testDeleteUser() {
    repository.deleteById(14); // last time deleted 13
    assertEquals(Optional.empty(), repository.findById(14));
  }
}
