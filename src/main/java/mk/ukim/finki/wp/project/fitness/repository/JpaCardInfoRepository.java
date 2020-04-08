package mk.ukim.finki.wp.project.fitness.repository;

import mk.ukim.finki.wp.project.fitness.models.CardInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaCardInfoRepository extends JpaRepository<CardInfo, Integer> {
}
