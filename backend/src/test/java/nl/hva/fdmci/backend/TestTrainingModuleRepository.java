package nl.hva.fdmci.backend;

import nl.hva.fdmci.backend.models.TrainingModule;
import nl.hva.fdmci.backend.repositories.TrainingModuleRepository;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * @author of test 1 is taherabalhas. Tests 2, 3 and 4 is Zakaria Raoudani
 */

@SpringBootTest
public class TestTrainingModuleRepository {

  @Autowired
  TrainingModuleRepository repository;

  /**
   * @author taherabalhas
   */
  @Test
  @Order(1)
  void testGetModulesByTools() {
    String tool = "Library";
    List<TrainingModule> modules = repository.findByQuery("find_by_tool", TrainingModule.Tool.valueOf(tool));

    // check if the modules were filtered
    assertEquals(3, modules.size());
  }

  @Test
  @Order(2)
  void testGetModulesByTheme() {
    String theme = "Heating";
    List<TrainingModule> modules = repository.findByQuery("find_by_theme", TrainingModule.Theme.valueOf(theme));

    assertEquals(4, modules.size());
  }

  @Test
  @Order(3)
  void testGetModulesByLocation() {
    String location = "Netherlands";
    List<TrainingModule> modules = repository.findByQuery("find_by_location", TrainingModule.Location.valueOf(location));

    assertEquals(1, modules.size());
  }

  @Test
  @Order(4)
  void testGetModulesByLanguage() {
    String language = "Dutch";
    List<TrainingModule> modules = repository.findByQuery("find_by_language", TrainingModule.Language.valueOf(language));

    assertEquals(3, modules.size());

  }

  /**
   * @author Tracy Owusu
   */
  @Test
  void addANewModule() {
    TrainingModule trainingModule = new TrainingModule("Sustainability", TrainingModule.Tool.Guide, TrainingModule.Theme.PublicPart,
      TrainingModule.Location.France, TrainingModule.Language.English);
    repository.save(trainingModule);
    assertNotNull(trainingModule);
    assertEquals("Sustainability", trainingModule.getName());
  }
}
