package mk.ukim.finki.wp.project.fitness.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor(access= AccessLevel.PRIVATE, force = true)
public class Member {
    @Id
    private int memberId;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;
    private Integer lastPaymentId;

    @JsonIgnore
    @ManyToMany(mappedBy = "trainees")
    @NotFound(action = NotFoundAction.IGNORE)
    private List<Employee> trainer;

    public Member(int memberId, String firstName, String lastName, String address, String phone, Integer lastPaymentId) {
        this.memberId = memberId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.lastPaymentId = lastPaymentId;
    }

    public void train(Employee employee) {
        this.trainer.add(employee);
        employee.getTrainees().add(this);
    }

    public void unTrain(Employee employee) {
        this.trainer.remove(employee);
        employee.getTrainees().remove(this);
    }


}
