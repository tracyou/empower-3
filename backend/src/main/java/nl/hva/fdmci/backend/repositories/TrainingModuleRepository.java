package nl.hva.fdmci.backend.repositories;

import nl.hva.fdmci.backend.models.Initiative;
import nl.hva.fdmci.backend.models.TrainingModule;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class TrainingModuleRepository {
  @PersistenceContext
  EntityManager entityManager;

  public List<TrainingModule> findAll() {
    TypedQuery<TrainingModule> namedQuery = entityManager.createNamedQuery("find_all_modules", TrainingModule.class);
    return namedQuery.getResultList();
  }

  public TrainingModule save(TrainingModule module) {
    return entityManager.merge(module);
  }
}
