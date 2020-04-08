package mk.ukim.finki.wp.project.fitness.models;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
public class Card {
    private Card(){}
    @Id
    @Column(name = "cardId")
    private Integer id;
    private LocalDate startDate;
    private LocalDate endDate;
    @ManyToOne
    private CardInfo cardInfo;

    public static synchronized Card createCard(Integer cardId, LocalDate startDate, LocalDate endDate, CardInfo cardInfo) {
        Card c = new Card();
        c.id = cardId;
        c.startDate = startDate;
        c.endDate = endDate;
        c.cardInfo = cardInfo;
        return c;
    }

}
