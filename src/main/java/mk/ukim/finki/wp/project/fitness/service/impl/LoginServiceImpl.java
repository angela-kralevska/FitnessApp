package mk.ukim.finki.wp.project.fitness.service.impl;

import mk.ukim.finki.wp.project.fitness.models.Employee;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidMemberIdException;
import mk.ukim.finki.wp.project.fitness.repository.JpaEmployeeRepository;
import mk.ukim.finki.wp.project.fitness.service.LoginService;
import org.springframework.stereotype.Service;

import java.security.InvalidParameterException;

@Service
public class LoginServiceImpl implements LoginService {

    private final JpaEmployeeRepository employeeRepository;

    public LoginServiceImpl(JpaEmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee loginEmployee(String username, String password) {
        Employee emp = this.employeeRepository.findByUsername(username);
        if(emp.getUsername().isEmpty()) {
            throw new InvalidMemberIdException();
        }
        else if(!emp.matches(password)){
            throw new InvalidParameterException();
        }
        else{
            emp.setPassword("******");
            return emp;
        }
    }
}
