package mk.ukim.finki.wp.project.fitness.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class Payment {

    @Transient
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private static int paymentsCounter = 1;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;

    @ManyToOne
    private Employee employee;

    @ManyToOne
    private Card card;

    @ManyToOne
    private Member member;

    private LocalDate date;

    public static synchronized Payment createOnePayment(Employee employee, Member member, Card card, LocalDate date) {
        Payment p = new Payment();
        p.paymentId = paymentsCounter;
        paymentsCounter++;
        p.employee = employee;
        p.member = member;
        p.card = card;
        p.date = date;
        return p;
    }

}
