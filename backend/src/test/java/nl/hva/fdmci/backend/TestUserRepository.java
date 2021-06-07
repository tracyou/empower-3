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
 * @author of tests 1, 2, 3 and 4 is taherabalhas, 5 is Zakaria Raoudani
 */

@SpringBootTest
public class TestUserRepository {

  @Autowired
  UserRepositoryInterface repository;

  @Autowired
  UserController controller;

  /**
   * @author taherabalhas
   */
  @Test
  @Order(1)
  void testAddUser() {
    User user = new User("tahera", "Tahera123!", "Initiative", "Go Green", "very cool");
    controller.save(user);
    // check if user is added
    assertNotNull(user);
    controller.getUserById(user.getId());
    // double check if user is added by searching for the username
    assertEquals("tahera", user.getUsername());
  }

  /**
   * @author taherabalhas
   */
  @Test
  @Order(2)
  void testGetAllUsers() {
    List<User> users = controller.getAllUsers();
    //check if users were called using the controller by checking the size of the list
    assertEquals(users.size(), 4);
  }

  /**
   * @author taherabalhas
   */
  @Test
  @Order(3)
  void testGetUser() {
    Optional<User> user = repository.findById(8);
    // check if the correct user was called using the repository
    assertEquals("balhast", user.get().getUsername());
  }

  /**
   * @author taherabalhas
   */
  @Test
  @Order(4)
  void testDeleteUser() {
    repository.deleteById(14); // last time deleted 13
    // check if the deletion was succeeded
    assertEquals(Optional.empty(), repository.findById(14));
  }

  @Test
  @Order(5)
  void testFindUser() {
    Optional<User> u = repository.findById(7);
    assertEquals("User1234!", u.get().getUsername());
  }



}
