package mk.ukim.finki.wp.project.fitness.repository;

import mk.ukim.finki.wp.project.fitness.models.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaCardRepository extends JpaRepository<Card, Integer> {
}
