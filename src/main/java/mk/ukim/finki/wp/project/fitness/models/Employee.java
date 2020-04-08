package mk.ukim.finki.wp.project.fitness.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor(access= AccessLevel.PRIVATE, force = true)
public class Employee {
    @Id
    private Integer employeeId;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;
    private LocalDateTime deletedOn;
    private String username;
    private String password;
    private String roles;
    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Member> trainees;


    public boolean matches(String term) {
        return this.password.matches(term);
    }
}
