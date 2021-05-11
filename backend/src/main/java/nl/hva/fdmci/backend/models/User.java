package nl.hva.fdmci.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

@Entity
@NamedQuery(name = "find_all_users", query = "select u from User u")
public class User {

  @Id
  @GeneratedValue
  private int id;

  private String username;
  private String password;
  private String userType;
  private String title;
  private String description;

  public User(int id, String username, String password, String userType, String title, String description) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.userType = userType;
    this.title = title;
    this.description = description;
  }

  public User() {

  }

  public User(String username, String password, String userType, String title, String description) {
    this.username = username;
    this.password = password;
    this.userType = userType;
    this.title = title;
    this.description = description;
  }

  public static User createRandomUser(int id) {
    return new User(id,"local101", "hi123", "local initiative", "nice initiative", "we're very nice");
  }

  public static User createInitialUser() {
    return new User("local101", "hi123", "local initiative", "nice initiative", "we're very nice");
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getUserType() {
    return userType;
  }

  public void setUserType(String userType) {
    this.userType = userType;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
