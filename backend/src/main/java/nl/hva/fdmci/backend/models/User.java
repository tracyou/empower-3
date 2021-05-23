package nl.hva.fdmci.backend.models;

import javax.persistence.*;

@Entity
@SequenceGenerator(name = "user_id", initialValue = 1001)
@NamedQuery(name = "find_all_users", query = "select u from User u")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id")
  private int id;

  private String username;
  private String password;

  @Enumerated(EnumType.STRING)
  private Type userType;

  private String title;
  private String description;

  public enum Type{
    Initiative,
    Authority,
  }

  public User(int id, String username, String password, Type userType, String title, String description) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.userType = userType;
    this.title = title;
    this.description = description;
  }

    public User(String username, String password, Type userType, String title, String description) {
    this.username = username;
    this.password = password;
    this.userType = userType;
    this.title = title;
    this.description = description;
  }

  public User() {

  }

  public static User createRandomUser(int id) {
    return new User(id, User.getRandomUsername(), User.getRandomPassword(), User.getRandomType(),
      User.getRandomTitle(), User.getRandomDescription());
  }

  public static User createInitialUser() {
    return new User(User.getRandomUsername(), User.getRandomPassword(), User.getRandomType(),
      User.getRandomTitle(), User.getRandomDescription());
  }

  private static String getRandomUsername(){
    String[] titleArray = new String[3];
    titleArray[0] = "energy101";
    titleArray[1] = "green_energy";
    titleArray[2] = "empower3";
    int random = (int) Math.floor(Math.random() * titleArray.length);
    return titleArray[random];
  }

  private static String getRandomPassword(){
    String[] titleArray = new String[3];
    titleArray[0] = "hi123";
    titleArray[1] = "Winner10";
    titleArray[2] = "heythere";
    int random = (int) Math.floor(Math.random() * titleArray.length);
    return titleArray[random];
  }

  private static Type getRandomType(){
    Type[] types;
    types = Type.values();
    int random = (int) Math.floor(Math.random() * types.length);
    return types[random];
  }

  private static String getRandomTitle(){
    String[] titleArray = new String[3];
    titleArray[0] = "Green energy";
    titleArray[1] = "Empower";
    titleArray[2] = "Energy active";
    int random = (int) Math.floor(Math.random() * titleArray.length);
    return titleArray[random];
  }

  private static String getRandomDescription(){
    String[] descriptionArray = new String[3];
    descriptionArray[0] = "we're very nice";
    descriptionArray[1] = "we're extremely cool";
    descriptionArray[2] = "we're active";
    int random = (int) Math.floor(Math.random() * descriptionArray.length);
    return descriptionArray[random];
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

  public Type getUserType() {
    return userType;
  }

  public void setUserType(Type userType) {
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
