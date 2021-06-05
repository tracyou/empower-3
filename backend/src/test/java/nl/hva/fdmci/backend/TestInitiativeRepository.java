package nl.hva.fdmci.backend;

import nl.hva.fdmci.backend.models.Initiative;
import nl.hva.fdmci.backend.repositories.InitiativeRepository;
import nl.hva.fdmci.backend.repositories.InitiativeRepositoryInterface;
import nl.hva.fdmci.backend.rest.InitiativeController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TestInitiativeRepository {

  InitiativeRepository repository = new InitiativeRepository(new ArrayList<>());

  @Autowired
  InitiativeRepositoryInterface repositoryInterface;

  @Autowired
  InitiativeController controller;


  @Test
  void testAddIniative() {
    Initiative initiative = new Initiative(4, "Amsterdam", "Getting Technical Support", "29-01-2012",
      "not selected", "selected", "selected", "not selected", "selected",
      "example 1", "example 2", "example 3", "Radio 1", "Radio 2",
      "Radio 3", "Radio 4", "tracy@gmail.com", "0612345678", "tracy.nl",
      "Tracy", "selected theme", "noord-holland", "random zip");

    repository.save(initiative);
    assertNotNull(initiative);
    repository.findAll();
    assertEquals(4, initiative.getId());
  }

  @Test
  void getInitiative() {
    controller.getAllInitiatative();
    assertNotNull(controller.getAllInitiatative().toString());
  }

  @Test
  void getInitiativeDatabase(){
    repositoryInterface.findAll();
    assertEquals("[]", repositoryInterface.findAll().toString());
  }

  @Test
  void attemptToPostIntoDatabase() {
    Initiative initiative = new Initiative();
    initiative.setCity("Amsterdam");
    initiative.setCollaboration("Getting Technical Support");
    initiative.setDate("29-01-2012");
    initiative.setGoalCreate("not selected");
    initiative.setGaolFootprint("selected");
    initiative.setGaolGreen("selected");
    initiative.setGaolImprove("not selected");
    initiative.setGaolReduce("selected");
    initiative.setGridExpertise1("example 1");
    initiative.setGridExpertise2("example 2");
    initiative.setGridExpertise3("example 3");
    initiative.setGridRadios("Radio 1");
    initiative.setGridRadios2("Radio 2");
    initiative.setGridRadios3("Radio 3");
    initiative.setGridRadios4("Radio 4");
    initiative.setInputEmail("tracy@gmail.com");
    initiative.setInputPhone("0612345678");
    initiative.setInputWebsite("tracy.nl");
    initiative.setName("Tracy");
    initiative.setSelectedTheme("selected theme");
    initiative.setState("noord-holland");
    initiative.setZip("random zip");

    controller.addInitiatative(initiative);
//    assertEquals();
  }
}
