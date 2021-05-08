package nl.hva.fdmci.backend.rest;

import nl.hva.fdmci.backend.models.Authority;
import nl.hva.fdmci.backend.repositories.AuthorityRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AuthorityController {
  private final AuthorityRepository authorityRepository = new AuthorityRepository(new ArrayList<>());

  @GetMapping("authority")
  public ResponseEntity<List<Authority>> getAllAuthority() {
    List<Authority> authorities = authorityRepository.findAll();
    return new ResponseEntity<>(authorities, HttpStatus.OK);
  }

  @PostMapping("authority")
  public ResponseEntity<Authority> addAuthority(@RequestBody Authority authority) {
    Authority newAuthority = authorityRepository.save(authority);
    return new ResponseEntity<>(authority, HttpStatus.ACCEPTED);
  }

  //GetMapping for showing stuff on frontend??

  }
