package mk.ukim.finki.wp.project.fitness.service;

import mk.ukim.finki.wp.project.fitness.models.Employee;

public interface LoginService {
    Employee loginEmployee(String username, String password);
}
