package mk.ukim.finki.wp.project.fitness.repository;

import mk.ukim.finki.wp.project.fitness.models.Locker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaLockerRepository extends JpaRepository<Locker, Integer> {
}
