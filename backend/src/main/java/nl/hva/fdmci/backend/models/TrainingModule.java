package nl.hva.fdmci.backend.models;


import javax.persistence.*;

@Entity
@NamedQuery(name = "find_all_modules", query = "select t from TrainingModule t")
@NamedQuery(name="find_by_tool", query = "select t from TrainingModule t where t.tool= ?1")
@NamedQuery(name="find_by_theme", query = "select t from TrainingModule t where t.theme= ?1")
@NamedQuery(name="find_by_location", query = "select t from TrainingModule t where t.location= ?1")
@NamedQuery(name="find_by_language", query = "select t from TrainingModule t where t.language= ?1")
public class TrainingModule {

  @Id
  @GeneratedValue
  private int id;

  private String name;

  @Enumerated(EnumType.STRING)
  private Tool tool;

  @Enumerated(EnumType.STRING)
  private Theme theme;

  @Enumerated(EnumType.STRING)
  private Location location;

  @Enumerated(EnumType.STRING)
  private Language language;

  public enum Tool{
    Calculator,
    Guide,
    Dashboard,
    VideoCourse,
    Library
  }

  public enum Theme{
    Heating,
    SolarEnergy,
    NaturalGas,
    PublicPart,
    WaterUsage,
    All
  }

  public enum Location{
    UK,
    Netherlands,
    Belgium,
    Denmark,
    France
  }

  public enum Language{
    English,
    Dutch,
    French,
    Danish
  }

  public TrainingModule(String name, Tool tool, Theme theme, Location location, Language language) {
    this.name = name;
    this.tool = tool;
    this.theme = theme;
    this.location = location;
    this.language = language;
  }

  public TrainingModule() {

  }

  public static TrainingModule createModules() {
    return new TrainingModule(TrainingModule.getRandomName(),
                              TrainingModule.getRandomTool(),
                              TrainingModule.getRandomTheme(),
                              TrainingModule.getRandomLocation(),
                              TrainingModule.getRandomLanguage());
  }

  private static String getRandomName(){
    String[] titleArray = new String[7];
    titleArray[0] = "Green Energy";
    titleArray[1] = "Energy Active Citizen";
    titleArray[2] = "Energy";
    titleArray[3] = "Become Ecofriendly";
    titleArray[4] = "Save the Planet";
    titleArray[5] = "Nature";
    titleArray[6] = "Green";
    int random = (int) Math.floor(Math.random() * titleArray.length);
    return titleArray[random];
  }

  private static Tool getRandomTool(){
    Tool[] tools;
    tools = Tool.values();
    int random = (int) Math.floor(Math.random() * tools.length);
    return tools[random];
  }

  private static Theme getRandomTheme(){
    Theme[] themes;
    themes = Theme.values();
    int random = (int) Math.floor(Math.random() * themes.length);
    return themes[random];
  }

  private static Location getRandomLocation(){
    Location[] locations;
    locations = Location.values();
    int random = (int) Math.floor(Math.random() * locations.length);
    return locations[random];
  }

  private static Language getRandomLanguage(){
    Language[] languages;
    languages = Language.values();
    int random = (int) Math.floor(Math.random() * languages.length);
    return languages[random];
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Tool getTool() {
    return tool;
  }

  public void setTool(Tool tool) {
    this.tool = tool;
  }

  public Theme getTheme() {
    return theme;
  }

  public void setTheme(Theme theme) {
    this.theme = theme;
  }

  public Location getLocation() {
    return location;
  }

  public void setLocation(Location location) {
    this.location = location;
  }

  public Language getLanguage() {
    return language;
  }

  public void setLanguage(Language language) {
    this.language = language;
  }
}
