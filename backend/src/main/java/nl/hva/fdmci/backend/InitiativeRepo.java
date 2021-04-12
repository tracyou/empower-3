package nl.hva.fdmci.backend;

import java.util.List;

public class InitiativeRepo {
  private final List<Initiative> initiativeList;
  int id = 1;

  public InitiativeRepo(List<Initiative> initiativeList) {
    this.initiativeList = initiativeList;
    this.createRandomEvent();
  }

  Initiative save(Initiative initiative) {
    if (initiative.getId() == 0) {
      initiative.setId(id);
      id++;
      this.initiativeList.add(initiative);
    }
    return initiative;
  }

  public List<Initiative> findAll() {
    return this.initiativeList;
  }

  private void createRandomEvent(){
    this.initiativeList.add(Initiative.createRandom());
  }
}
