package nl.hva.fdmci.backend.repositories;

import nl.hva.fdmci.backend.models.Initiative;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InitiativeRepositorie extends JpaRepository<Initiative, Integer> {
}
