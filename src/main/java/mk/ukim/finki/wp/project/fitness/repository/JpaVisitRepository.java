package mk.ukim.finki.wp.project.fitness.repository;

import mk.ukim.finki.wp.project.fitness.models.Visit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaVisitRepository extends JpaRepository<Visit, Integer> {
}
