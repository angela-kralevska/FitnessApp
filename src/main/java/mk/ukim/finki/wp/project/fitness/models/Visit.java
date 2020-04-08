package mk.ukim.finki.wp.project.fitness.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
public class Visit {

    private Visit(){}

    @Id
    private int visitId;

    private LocalDate date;

    @Column(name = "from_time")
    private LocalTime from;

    @Column(name = "to_time")
    private LocalTime to;

    @ManyToOne
    private Card card;

    @ManyToOne
    private Locker locker;

    public static synchronized Visit createVisit(int visitId, Card card, Locker locker, LocalDate date, LocalTime from, LocalTime to) {
        Visit v = new Visit();
        v.visitId = visitId;
        v.card = card;
        v.locker = locker;
        v.date = date;
        v.from = from;
        v.to = to;
        return v;
    }

}
