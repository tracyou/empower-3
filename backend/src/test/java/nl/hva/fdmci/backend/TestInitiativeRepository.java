package nl.hva.fdmci.backend;

import nl.hva.fdmci.backend.models.Initiative;
import nl.hva.fdmci.backend.repositories.InitiativeRepository;
import nl.hva.fdmci.backend.repositories.InitiativeRepositoryInterface;
import nl.hva.fdmci.backend.rest.InitiativeController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.Random;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TestInitiativeRepository {

  InitiativeRepository repository = new InitiativeRepository(new ArrayList<>());

  @Autowired
  InitiativeRepositoryInterface repositoryInterface;

  @Autowired
  InitiativeController controller;

  @Autowired
  private TestRestTemplate restTemplate;


  /**
   * @author Tracy Owusu
   */
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

  /**
   * @author Tracy Owusu
   */
  @Test
  void getInitiative() {
    controller.getAllInitiatative();
    assertNotNull(controller.getAllInitiatative().toString());
  }

  /**
   * @author Tracy Owusu
   */
  @Test
  void postWithController() {
    Initiative initiative = new Initiative(4, "Amsterdam", "Getting Technical Support", "29-01-2012",
      "not selected", "selected", "selected", "not selected", "selected",
      "example 1", "example 2", "example 3", "Radio 1", "Radio 2",
      "Radio 3", "Radio 4", "tracy@gmail.com", "0612345678", "tracy.nl",
      "Tracy", "selected theme", "noord-holland", "random zip");

    controller.addInitiatative(initiative);
    assertNotNull(initiative);
  }


  /**
   * @author Tracy Owusu
   */
  @Test
  void attemptToPostInADifferentWay() {
    ResponseEntity<Initiative[]> result = this.restTemplate.getForEntity("http://localhost:8080/initiative", Initiative[].class);
    assertEquals(HttpStatus.OK, result.getStatusCode());
    int length = result.getBody().length;

    Initiative initiative = new Initiative((int) (Math.random() * (50 - 1 + 1)), "Amsterdam", "Getting Technical Support", "29-01-2012",
      "not selected", "selected", "selected", "not selected", "selected",
      "example 1", "example 2", "example 3", "Radio 1", "Radio 2",
      "Radio 3", "Radio 4", "tracy@gmail.com", "0612345678", "tracy.nl",
      "Tracy", "selected theme", "noord-holland", "random zip");

    ResponseEntity<Initiative> addNew = this.restTemplate.postForEntity("http://localhost:8080/initiative", initiative, Initiative.class);
    assertEquals(HttpStatus.ACCEPTED, addNew.getStatusCode());

    ResponseEntity<Initiative[]> result2 = this.restTemplate.getForEntity("http://localhost:8080/initiative", Initiative[].class);
    assertEquals(HttpStatus.OK, result.getStatusCode());
    assertEquals(length + 1, result2.getBody().length);

  }


}
