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
      this.createRandomUser(id);
      id++;
    }
  }

  private void createRandomUser(int id) {
    this.userList.add(User.createRandomUser(id));
  }
}
