package nl.hva.fdmci.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InitiatativeRepo extends JpaRepository<Initiatative, Long> {
}
