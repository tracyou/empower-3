package nl.hva.fdmci.backend.models;

import java.util.Date;

public class Initiative {
  private int id;
  private String city;
  private String collaboration;
  private Date date;
  private String goalCreate;
  private String gaolFootprint;
  private String gaolGreen;
  private String gaolImprove;
  private String gaolReduce;
  private String gridExpertise1;
  private String gridExpertise2;
  private String gridExpertise3;
  private String gridRadios;
  private String gridRadios2;
  private String gridRadios3;
  private String gridRadios4;
  private String inputEmail;
  private int inputPhone;
  private String inputWebsite;
  private String name;
  private String selectedTheme;
  private String state;
  private String zip;


  public Initiative() {

  };

//  public Initiatative(int id, String city, String collaboration, Date date, String goalCreate, String gaolFootprint, String gaolGreen, String gaolImprove, String gaolReduce, String gridExpertise1, String gridExpertise2, String gridExpertise3, String gridRadios, String gridRadios2, String gridRadios3, String gridRadios4, String inputEmail, int inputPhone, String inputWebsite, String name, String selectedTheme, String state, String zip) {
//    this.id = id;
//    this.city = city;
//    this.collaboration = collaboration;
//    this.date = date;
//    this.goalCreate = goalCreate;
//    this.gaolFootprint = gaolFootprint;
//    this.gaolGreen = gaolGreen;
//    this.gaolImprove = gaolImprove;
//    this.gaolReduce = gaolReduce;
//    this.gridExpertise1 = gridExpertise1;
//    this.gridExpertise2 = gridExpertise2;
//    this.gridExpertise3 = gridExpertise3;
//    this.gridRadios = gridRadios;
//    this.gridRadios2 = gridRadios2;
//    this.gridRadios3 = gridRadios3;
//    this.gridRadios4 = gridRadios4;
//    this.inputEmail = inputEmail;
//    this.inputPhone = inputPhone;
//    this.inputWebsite = inputWebsite;
//    this.name = name;
//    this.selectedTheme = selectedTheme;
//    this.state = state;
//    this.zip = zip;
//  }
  public Initiative(int id, String city) {
    this.id = id;
    this.city = city;
  }

  public static Initiative createRandom(int id){
    return new Initiative(id, "city");
  }

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

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
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
