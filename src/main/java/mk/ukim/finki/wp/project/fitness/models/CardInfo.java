package mk.ukim.finki.wp.project.fitness.models;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor(access= AccessLevel.PRIVATE, force = true)
public class CardInfo {
    @Id
    @Column(name = "cardInfoId")
    private Integer id;
    private String name;
    private Integer durationInDays;
    private Integer visitsInWeek;
    private Integer price;
}