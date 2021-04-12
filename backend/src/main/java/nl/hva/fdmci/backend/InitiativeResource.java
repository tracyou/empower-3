package nl.hva.fdmci.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("initiative")
public class InitiativeResource {
  private final InitiativeRepo initiativeRepo = new InitiativeRepo(new ArrayList<>());

  @GetMapping("/all")
  public ResponseEntity<List<Initiative>> getAllInitiatative(){
    List<Initiative> initiatives = initiativeRepo.findAll();
    return new ResponseEntity<>(initiatives, HttpStatus.OK);
  }

  @PostMapping("/add")
  public ResponseEntity<Initiative> addInitiatative(@RequestBody Initiative initiative){
    Initiative newInitiative = initiativeRepo.save(initiative);
    return new ResponseEntity<>(newInitiative, HttpStatus.ACCEPTED);
  }
}
