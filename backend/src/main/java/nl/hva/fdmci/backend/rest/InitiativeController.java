package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.models.Initiative;
import nl.hva.fdmci.backend.repositories.InitiativeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("initiative")
public class InitiativeController {
  private final InitiativeRepository initiativeRepository = new InitiativeRepository(new ArrayList<>());

  @GetMapping("/all")
  public ResponseEntity<List<Initiative>> getAllInitiatative(){
    List<Initiative> initiatives = initiativeRepository.findAll();
    return new ResponseEntity<>(initiatives, HttpStatus.OK);
  }

  @PostMapping("/add")
  public ResponseEntity<Initiative> addInitiatative(@RequestBody Initiative initiative){
    Initiative newInitiative = initiativeRepository.save(initiative);
    return new ResponseEntity<>(newInitiative, HttpStatus.ACCEPTED);
  }
}
