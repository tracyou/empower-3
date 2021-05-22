package nl.hva.fdmci.backend.models;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

@Entity
@NamedQuery(name = "find_all_modules", query = "select t from TrainingModule t")
public class TrainingModule {
  @Id
  private int id;

  private String tools;
  private String theme;
  private String Location;
  private String Language;

  public TrainingModule(String tools, String theme, String location, String language) {
    this.tools = tools;
    this.theme = theme;
    Location = location;
    Language = language;
  }

  public TrainingModule() {

  }

  public static TrainingModule createModules() {
    return new TrainingModule("hi", "hello", "hey", "hola");
  }
}
