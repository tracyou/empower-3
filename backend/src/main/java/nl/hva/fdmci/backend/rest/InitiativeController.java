package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.models.Initiative;
import nl.hva.fdmci.backend.repositories.InitiativeRepositoryInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class InitiativeController {
//  private final InitiativeRepository initiativeRepository = new InitiativeRepository(new ArrayList<>());

  private final InitiativeRepositoryInterface initiativeRepository;

  public InitiativeController(InitiativeRepositoryInterface initiativeRepository) {
    this.initiativeRepository = initiativeRepository;
  }

  @GetMapping("initiative")
  public ResponseEntity<List<Initiative>> getAllInitiatative(){
    List<Initiative> initiatives = initiativeRepository.findAll();
    return new ResponseEntity<>(initiatives, HttpStatus.OK);
  }

  @GetMapping("initiative/last")
  public ResponseEntity<List<Initiative>> getLastInitiatative(){
    List<Initiative> initiatives2 = initiativeRepository.findAll();
    Initiative initiatives = initiativeRepository.getOne(initiatives2.size());

    List<Initiative> initiativeList = new ArrayList<>();
    initiativeList.add(initiatives);

    return new ResponseEntity<>(initiativeList, HttpStatus.OK);
  }

  @PostMapping("initiative")
  public ResponseEntity<Initiative> addInitiatative(@RequestBody Initiative initiative){
    Initiative newInitiative = initiativeRepository.save(initiative);
    return new ResponseEntity<>(newInitiative, HttpStatus.ACCEPTED);
  }
}
