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

  public Initiative(int id, String city, String collaboration, Date date, String goalCreate, String gaolFootprint,
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

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

}
