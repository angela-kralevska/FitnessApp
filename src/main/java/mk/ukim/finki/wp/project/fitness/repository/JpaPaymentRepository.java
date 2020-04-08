package mk.ukim.finki.wp.project.fitness.repository;

import mk.ukim.finki.wp.project.fitness.models.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaPaymentRepository extends JpaRepository<Payment, Integer> {
}
