package mk.ukim.finki.wp.project.fitness.models;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mk.ukim.finki.wp.project.fitness.enums.ChangingRoom;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor(access= AccessLevel.PRIVATE, force = true)
public class Locker {
    @Id
    private Integer lockerId;
    private Integer number;
    @Enumerated(EnumType.STRING)
    private ChangingRoom changingRoom;

    private String description;

    public boolean matches(String term) {
        return this.lockerId.equals(term) ||
                this.description.contains(term) ||
                this.changingRoom.getDescription().contains(term);
    }

}
