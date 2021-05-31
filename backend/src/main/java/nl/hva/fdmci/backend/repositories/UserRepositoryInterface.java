package nl.hva.fdmci.backend.repositories;

import nl.hva.fdmci.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositoryInterface extends JpaRepository<User, Integer> {
}
