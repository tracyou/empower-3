package nl.hva.fdmci.backend.repositories;

import nl.hva.fdmci.backend.models.Initiative;

import java.util.List;

public class InitiativeRepository {
  private final List<Initiative> initiativeList;
  int id = 1;

  public InitiativeRepository(List<Initiative> initiativeList) {
    this.initiativeList = initiativeList;
    for (int i = id; i < 4; i++) {
      this.createRandomInitiative(id);
      id++;
    }
  }

  public Initiative save(Initiative initiative) {
//    if (initiative.getId() == 0) {
//      initiative.setId(id);
//      id++;
      this.initiativeList.add(initiative);
//    }
    return initiative;
  }

  public List<Initiative> findAll() {
    return this.initiativeList;
  }

  private void createRandomInitiative(int id){
    this.initiativeList.add(Initiative.createRandom(id));
  }
}
