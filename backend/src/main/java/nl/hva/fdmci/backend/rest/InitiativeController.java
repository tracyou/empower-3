package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.models.Initiative;
import nl.hva.fdmci.backend.repositories.InitiativeRepositoryInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InitiativeController {

  private final InitiativeRepositoryInterface initiativeRepository;

  public InitiativeController(InitiativeRepositoryInterface initiativeRepository) {
    this.initiativeRepository = initiativeRepository;
  }

  @GetMapping("initiative")
  public ResponseEntity<List<Initiative>> getAllInitiatative(){
    List<Initiative> initiatives = initiativeRepository.findAll();
    return new ResponseEntity<>(initiatives, HttpStatus.OK);
  }

  @PostMapping("initiative")
  public ResponseEntity<Initiative> addInitiatative(@RequestBody Initiative initiative){
    Initiative newInitiative = initiativeRepository.save(initiative);
    return new ResponseEntity<>(newInitiative, HttpStatus.ACCEPTED);
  }
}
