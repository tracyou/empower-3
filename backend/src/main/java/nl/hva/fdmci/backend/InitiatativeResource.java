package nl.hva.fdmci.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("initiative")
public class InitiatativeResource {
  private final InitiatativeRepo initiatativeRepo = new InitiatativeRepo(new ArrayList<>());

  @GetMapping("/all")
  public ResponseEntity<List<Initiatative>> getAllInitiatative(){
    List<Initiatative> initiatatives = initiatativeRepo.findAll();
    return new ResponseEntity<>(initiatatives, HttpStatus.OK);
  }

  @PostMapping("/add")
  public ResponseEntity<Initiatative> addInitiatative(@RequestBody Initiatative initiatative){
    Initiatative newInitiatative = initiatativeRepo.save(initiatative);
    return new ResponseEntity<>(newInitiatative, HttpStatus.ACCEPTED);
  }
}
