package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.models.TrainingModule;
import nl.hva.fdmci.backend.repositories.TrainingModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TrainingModuleController {

  @Autowired
  private TrainingModuleRepository moduleRepository;

  @GetMapping("modules")
  public List<TrainingModule> getAllModules(@RequestParam (value = "tool", required = false) String tool,
                            @RequestParam (value = "theme", required = false) String theme,
                            @RequestParam (value = "location", required = false) String location,
                            @RequestParam (value = "language", required = false) String language) {

    if (tool != null) {
      return moduleRepository.findByQuery("find_by_tool", TrainingModule.Tool.valueOf(tool));
    }

    if (theme != null) {
      return moduleRepository.findByQuery("find_by_theme", TrainingModule.Theme.valueOf(theme));
    }

    if (location != null) {
      return moduleRepository.findByQuery("find_by_location", TrainingModule.Location.valueOf(location));
    }

    if (language != null) {
      return moduleRepository.findByQuery("find_by_language", TrainingModule.Language.valueOf(language));
    }

    return moduleRepository.findAll();
  }
}
