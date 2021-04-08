package nl.hva.fdmci.backend.models;

public class User {
  private int id;
  private String username;
  private String password;
  private String userKind;
  private String title;
  private String description;

  public User(int id, String username, String password, String userKind, String title, String description) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.userKind = userKind;
    this.title = title;
    this.description = description;
  }

  public static User createRandomUser(int id) {
    return new User(id, "loser101", "hi123", "local initiative", "nice initiative", "we're very nice");
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
