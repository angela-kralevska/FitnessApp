package mk.ukim.finki.wp.project.fitness.service;

import mk.ukim.finki.wp.project.fitness.models.Payment;
import org.springframework.data.domain.Page;

import java.time.LocalDate;

public interface PaymentService {

    Payment createPayment(Integer employeeId, Integer memberId, Integer cardId, LocalDate date);

    Page<Payment> getAllPayments(int page, int size);

    void deletePayment(Integer paymentId);
}
