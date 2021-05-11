package nl.hva.fdmci.backend.repositories;

import nl.hva.fdmci.backend.models.User;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
@Primary
public class UserRepositoryJpa {
  @PersistenceContext
  EntityManager entityManager;

  public List<User> findAll() {
    TypedQuery<User> namedQuery = entityManager.createNamedQuery("find_all_users", User.class);
    return namedQuery.getResultList();
  }

  public User findById(int id) {
    return entityManager.find(User.class,id);
  }

  public User save(User user) {
    return entityManager.merge(user);
  }
}
