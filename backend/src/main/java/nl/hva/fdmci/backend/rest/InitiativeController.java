package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.models.Initiative;
import nl.hva.fdmci.backend.repositories.InitiativeRepositoryJpa;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class InitiativeController {
  private InitiativeRepositoryJpa initiativeRepository;

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
