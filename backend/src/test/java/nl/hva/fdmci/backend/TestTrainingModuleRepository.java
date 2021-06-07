package nl.hva.fdmci.backend;

import nl.hva.fdmci.backend.models.TrainingModule;
import nl.hva.fdmci.backend.models.User;
import nl.hva.fdmci.backend.repositories.TrainingModuleRepository;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * @author of test 1 is taherabalhas. Tests 2, 3 and 4 is Zakaria Raoudani
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

  @Test
  @Order(2)
  void testGetModulesByTheme() {
    String theme = "Heating";
    List<TrainingModule> modules = repository.findByQuery("find_by_tool", TrainingModule.Tool.valueOf(theme));

    assertEquals(4, modules.size());
  }

  @Test
  @Order(3)
  void testGetModulesByLocation() {
    String location = "Netherlands";
    List<TrainingModule> modules = repository.findByQuery("find_by_tool", TrainingModule.Tool.valueOf(location));

    assertEquals(1, modules.size());
  }

  @Test
  @Order(4)
  void testGetModulesByLanguage() {
    String language = "Dutch";
    List<TrainingModule> modules = repository.findByQuery("find_by_tool", TrainingModule.Tool.valueOf(language));

    assertEquals(3, modules.size());


}}
