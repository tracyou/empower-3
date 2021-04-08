package nl.hva.fdmci.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InitiatativeService {
  private final InitiatativeRepo initiatativeRepo;

  @Autowired
  public InitiatativeService(@Lazy InitiatativeRepo initiatativeRepo) {
    this.initiatativeRepo = initiatativeRepo;
  }
  @Bean
  public Initiatative saveInitiative(Initiatative initiatative) {
    initiatative.setId((int) Math.floor(Math.random()));
    return initiatativeRepo.save(initiatative);
  }

  @Bean
  public List<Initiatative> findAllInitatiative() {
    return initiatativeRepo.findAll();
  }
}
