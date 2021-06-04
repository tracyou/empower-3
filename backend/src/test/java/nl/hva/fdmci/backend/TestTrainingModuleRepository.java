package nl.hva.fdmci.backend;

import nl.hva.fdmci.backend.models.TrainingModule;
import nl.hva.fdmci.backend.repositories.TrainingModuleRepository;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * @author of test 1 is taherabalhas
 */

@SpringBootTest
public class TestTrainingModuleRepository {

  @Autowired
  TrainingModuleRepository repository;

  @Test
  @Order(1)
  void testGetModulesByTools() {
    String tool = "Library";
    List<TrainingModule> modules = repository.findByQuery("find_by_tool", TrainingModule.Tool.valueOf(tool));

    assertEquals(3, modules.size());
  }
}
