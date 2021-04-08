package nl.hva.fdmci.backend;

import java.io.Serializable;
import java.util.Date;

public class Initiatative implements Serializable {
  private int id;
  private String city;
  private String collaboration;
  private Date date;
  private String goals;
  private String challenges;
  private String expertise;
  private String email;
  private String website;
  private int number;

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

  public String getGoals() {
    return goals;
  }

  public void setGoals(String goals) {
    this.goals = goals;
  }

  public String getChallenges() {
    return challenges;
  }

  public void setChallenges(String challenges) {
    this.challenges = challenges;
  }

  public String getExpertise() {
    return expertise;
  }

  public void setExpertise(String expertise) {
    this.expertise = expertise;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getWebsite() {
    return website;
  }

  public void setWebsite(String website) {
    this.website = website;
  }

  public int getNumber() {
    return number;
  }

  public void setNumber(int number) {
    this.number = number;
  }



}
