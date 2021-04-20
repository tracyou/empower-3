package nl.hva.fdmci.backend.models;

public class Authority {
  private int id;
  private String parisAgreement;
  private String sustainableGoals;
  private String structure;
  private String toolName;
  private String toolLabel;
  private String toolDescription;
  private String support;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getParisAgreement() {
    return parisAgreement;
  }

  public void setParisAgreement(String parisAgreement) {
    this.parisAgreement = parisAgreement;
  }

  public String getSustainableGoals() {
    return sustainableGoals;
  }

  public void setSustainableGoals(String sustainableGoals) {
    this.sustainableGoals = sustainableGoals;
  }

  public String getStructure() {
    return structure;
  }

  public void setStructure(String structure) {
    this.structure = structure;
  }

  public String getToolName() {
    return toolName;
  }

  public void setToolName(String toolName) {
    this.toolName = toolName;
  }

  public String getToolLabel() {
    return toolLabel;
  }

  public void setToolLabel(String toolLabel) {
    this.toolLabel = toolLabel;
  }

  public String getToolDescription() {
    return toolDescription;
  }

  public void setToolDescription(String toolDescription) {
    this.toolDescription = toolDescription;
  }

  public String getSupport() {
    return support;
  }

  public void setSupport(String support) {
    this.support = support;
  }
}


