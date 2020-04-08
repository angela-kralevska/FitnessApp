package mk.ukim.finki.wp.project.fitness.service.impl;

import mk.ukim.finki.wp.project.fitness.models.Card;
import mk.ukim.finki.wp.project.fitness.models.Employee;
import mk.ukim.finki.wp.project.fitness.models.Member;
import mk.ukim.finki.wp.project.fitness.models.Payment;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidCardIdException;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidEmployeeIdException;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidMemberIdException;
import mk.ukim.finki.wp.project.fitness.repository.JpaCardRepository;
import mk.ukim.finki.wp.project.fitness.repository.JpaEmployeeRepository;
import mk.ukim.finki.wp.project.fitness.repository.JpaMemberRepository;
import mk.ukim.finki.wp.project.fitness.repository.JpaPaymentRepository;
import mk.ukim.finki.wp.project.fitness.service.PaymentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    private final JpaPaymentRepository paymentRepository;

    private final JpaEmployeeRepository employeeRepository;

    private final JpaMemberRepository memberRepository;

    private final JpaCardRepository cardRepository;

    public PaymentServiceImpl(JpaPaymentRepository paymentRepository,
                              JpaEmployeeRepository employeeRepository,
                              JpaMemberRepository memberRepository,
                              JpaCardRepository cardRepository
                              ) {
        this.paymentRepository = paymentRepository;
        this.employeeRepository = employeeRepository;
        this.memberRepository = memberRepository;
        this.cardRepository = cardRepository;
    }


    @Override
    public Payment createPayment(Integer employeeId, Integer memberId, Integer cardId, LocalDate date) {
        if (date == null) {
            throw new IllegalArgumentException();
        }
        Payment payment;
        Employee employee = this.employeeRepository.findById(employeeId).orElseThrow(InvalidEmployeeIdException::new);
        Member member = this.memberRepository.findById(memberId).orElseThrow(InvalidMemberIdException::new);
        Card card = this.cardRepository.findById(cardId).orElseThrow(InvalidCardIdException::new);

        payment = Payment.createOnePayment(employee, member, card, date);

        return this.paymentRepository.save(payment);

    }

    @Override
    public Page<Payment> getAllPayments(int page, int size) {
        return this.paymentRepository.findAll(PageRequest.of(page, size, Sort.by("member")));
    }

    @Override
    public void deletePayment(Integer paymentId) {
        this.paymentRepository.deleteById(paymentId);
    }
}
