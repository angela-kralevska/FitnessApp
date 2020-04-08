package mk.ukim.finki.wp.project.fitness.repository;

import mk.ukim.finki.wp.project.fitness.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JpaEmployeeRepository extends JpaRepository<Employee, Integer> {
    Employee findByUsername(String username);
    Optional <Employee> findByPassword(String username);
}
