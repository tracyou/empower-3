package nl.hva.fdmci.backend.repositories;

import nl.hva.fdmci.backend.models.User;

import java.util.ArrayList;
import java.util.List;

public class UserRepository {

  private final List<User> userList;
  int id = 1;

  public UserRepository() {
    this.userList = new ArrayList<>();
    for (int i = id; i < 4; i++) {
      this.createRandomEvent(id);
      id++;
    }
  }

  private void createRandomEvent(int id) {
    this.userList.add(User.createRandomUser(id));
  }

  public List<User> findAll() {
    return this.userList;
  }

  public User save(User user) {
    if (user.getId() == 0) {
      user.setId(id);
      id++;
      this.userList.add(user);
    }
    return user;
  }
}
