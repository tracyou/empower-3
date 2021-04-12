package nl.hva.fdmci.backend;

import java.util.List;

public class InitiatativeRepo{
  private final List<Initiatative> initiatativeList;
  int id = 1;

  public InitiatativeRepo(List<Initiatative> initiatativeList) {
    this.initiatativeList = initiatativeList;
    this.createRandomEvent();
  }

  Initiatative save(Initiatative initiatative) {
    if (initiatative.getId() == 0) {
      initiatative.setId(id);
      id++;
      this.initiatativeList.add(initiatative);
    }
    return initiatative;
  }

  public List<Initiatative> findAll() {
    return this.initiatativeList;
  }

  private void createRandomEvent(){
    this.initiatativeList.add(Initiatative.createRandom());
  }
}
