package nl.hva.fdmci.backend;

import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/initiative")
public class InitiatativeResource {
  private final InitiatativeService initiatativeService;

  public InitiatativeResource(@Lazy InitiatativeService initiatativeService) {
    this.initiatativeService = initiatativeService;
  }

  @GetMapping("/all")
  public ResponseEntity<List<Initiatative>> getAllInitiatative(){
    List<Initiatative> initiatatives = initiatativeService.findAllInitatiative();
    return new ResponseEntity<>(initiatatives, HttpStatus.OK);
  }

  @PostMapping("/add")
  public ResponseEntity<Initiatative> addInitiatative(@RequestBody Initiatative initiatative){
    Initiatative newInitiatative = initiatativeService.saveInitiative(initiatative);
    return new ResponseEntity<>(newInitiatative, HttpStatus.ACCEPTED);
  }
}
