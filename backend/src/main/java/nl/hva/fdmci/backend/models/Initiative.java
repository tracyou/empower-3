package nl.hva.fdmci.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "Initiative")
@Table(name = "initiative")
public class Initiative {
  @Id
  @Column(name = "ID", updatable = false)
  private int id;

  @Column(name = "City", columnDefinition = "TEXT")
  private String city;

  @Column(name = "collaboration", columnDefinition = "TEXT")
  private String collaboration;

  @Column(name = "date", columnDefinition = "TEXT")
  private String date;

  @Column(name = "goal_create", columnDefinition = "TEXT")
  private String goalCreate;

  @Column(name = "gaol_footprint", columnDefinition = "TEXT")
  private String gaolFootprint;

  @Column(name = "gaol_green", columnDefinition = "TEXT")
  private String gaolGreen;

  @Column(name = "gaol_improve", columnDefinition = "TEXT")
  private String gaolImprove;

  @Column(name = "gaol_reduce", columnDefinition = "TEXT")
  private String gaolReduce;

  @Column(name = "grid_expertise1", columnDefinition = "TEXT")
  private String gridExpertise1;

  @Column(name = "grid_expertise2", columnDefinition = "TEXT")
  private String gridExpertise2;

  @Column(name = "grid_expertise3", columnDefinition = "TEXT")
  private String gridExpertise3;

  @Column(name = "grid_radios", columnDefinition = "TEXT")
  private String gridRadios;

  @Column(name = "grid_radios2", columnDefinition = "TEXT")
  private String gridRadios2;

  @Column(name = "grid_radios3", columnDefinition = "TEXT")
  private String gridRadios3;

  @Column(name = "grid_radios4", columnDefinition = "TEXT")
  private String gridRadios4;

  @Column(name = "input_email", columnDefinition = "TEXT")
  private String inputEmail;

  @Column(name = "input_phone")
  private int inputPhone;

  @Column(name = "input_website", columnDefinition = "TEXT")
  private String inputWebsite;

  @Column(name = "name", columnDefinition = "TEXT")
  private String name;

  @Column(name = "selected_theme", columnDefinition = "TEXT")
  private String selectedTheme;

  @Column(name = "state", columnDefinition = "TEXT")
  private String state;

  @Column(name = "zip", columnDefinition = "TEXT")
  private String zip;

  public Initiative(int id, String city, String collaboration, String date, String goalCreate, String gaolFootprint,
                    String gaolGreen, String gaolImprove, String gaolReduce, String gridExpertise1,
                    String gridExpertise2, String gridExpertise3, String gridRadios, String gridRadios2,
                    String gridRadios3, String gridRadios4, String inputEmail, int inputPhone, String inputWebsite,
                    String name, String selectedTheme, String state, String zip) {
    this.id = id;
    this.city = city;
    this.collaboration = collaboration;
    this.date = date;
    this.goalCreate = goalCreate;
    this.gaolFootprint = gaolFootprint;
    this.gaolGreen = gaolGreen;
    this.gaolImprove = gaolImprove;
    this.gaolReduce = gaolReduce;
    this.gridExpertise1 = gridExpertise1;
    this.gridExpertise2 = gridExpertise2;
    this.gridExpertise3 = gridExpertise3;
    this.gridRadios = gridRadios;
    this.gridRadios2 = gridRadios2;
    this.gridRadios3 = gridRadios3;
    this.gridRadios4 = gridRadios4;
    this.inputEmail = inputEmail;
    this.inputPhone = inputPhone;
    this.inputWebsite = inputWebsite;
    this.name = name;
    this.selectedTheme = selectedTheme;
    this.state = state;
    this.zip = zip;
  }

  public Initiative() {

  }

  public static Initiative createRandom(int id){
    return new Initiative(id, "city", null, null, null, null, null,
      null, null, null, null, null, null,
      null, null, null, null, 0, null, null,
      null, null, null);
  }

  @Id
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getCollaboration() {
    return collaboration;
  }

  public void setCollaboration(String collaboration) {
    this.collaboration = collaboration;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public String getGoalCreate() {
    return goalCreate;
  }

  public void setGoalCreate(String goalCreate) {
    this.goalCreate = goalCreate;
  }

  public String getGaolFootprint() {
    return gaolFootprint;
  }

  public void setGaolFootprint(String gaolFootprint) {
    this.gaolFootprint = gaolFootprint;
  }

  public String getGaolGreen() {
    return gaolGreen;
  }

  public void setGaolGreen(String gaolGreen) {
    this.gaolGreen = gaolGreen;
  }

  public String getGaolImprove() {
    return gaolImprove;
  }

  public void setGaolImprove(String gaolImprove) {
    this.gaolImprove = gaolImprove;
  }

  public String getGaolReduce() {
    return gaolReduce;
  }

  public void setGaolReduce(String gaolReduce) {
    this.gaolReduce = gaolReduce;
  }

  public String getGridExpertise1() {
    return gridExpertise1;
  }

  public void setGridExpertise1(String gridExpertise1) {
    this.gridExpertise1 = gridExpertise1;
  }

  public String getGridExpertise2() {
    return gridExpertise2;
  }

  public void setGridExpertise2(String gridExpertise2) {
    this.gridExpertise2 = gridExpertise2;
  }

  public String getGridExpertise3() {
    return gridExpertise3;
  }

  public void setGridExpertise3(String gridExpertise3) {
    this.gridExpertise3 = gridExpertise3;
  }

  public String getGridRadios() {
    return gridRadios;
  }

  public void setGridRadios(String gridRadios) {
    this.gridRadios = gridRadios;
  }

  public String getGridRadios2() {
    return gridRadios2;
  }

  public void setGridRadios2(String gridRadios2) {
    this.gridRadios2 = gridRadios2;
  }

  public String getGridRadios3() {
    return gridRadios3;
  }

  public void setGridRadios3(String gridRadios3) {
    this.gridRadios3 = gridRadios3;
  }

  public String getGridRadios4() {
    return gridRadios4;
  }

  public void setGridRadios4(String gridRadios4) {
    this.gridRadios4 = gridRadios4;
  }

  public String getInputEmail() {
    return inputEmail;
  }

  public void setInputEmail(String inputEmail) {
    this.inputEmail = inputEmail;
  }

  public int getInputPhone() {
    return inputPhone;
  }

  public void setInputPhone(int inputPhone) {
    this.inputPhone = inputPhone;
  }

  public String getInputWebsite() {
    return inputWebsite;
  }

  public void setInputWebsite(String inputWebsite) {
    this.inputWebsite = inputWebsite;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSelectedTheme() {
    return selectedTheme;
  }

  public void setSelectedTheme(String selectedTheme) {
    this.selectedTheme = selectedTheme;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getZip() {
    return zip;
  }

  public void setZip(String zip) {
    this.zip = zip;
  }
}
