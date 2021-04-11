package nl.hva.fdmci.backend;

import java.io.Serializable;
import java.util.Date;

public class Initiatative implements Serializable {
  private int id;
  private String city;
  private String collaboration;
  private Date date;
  private boolean goalCreate;
  private boolean gaolFootprint;
  private boolean gaolGreen;
  private boolean gaolImprove;
  private boolean gaolReduce;
  private boolean gridExpertise1;
  private boolean gridExpertise2;
  private boolean gridExpertise3;
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


  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }
}
