package mk.ukim.finki.wp.project.fitness.service;

import mk.ukim.finki.wp.project.fitness.models.Employee;
import mk.ukim.finki.wp.project.fitness.models.Member;

import java.util.Collection;
import java.util.List;

public interface TrainingService {

    void train(Integer memberId, Integer employeeId);

    void unTrain(Integer memberId, Integer employeeId);

    Collection<Employee> getAllTrainersOfGivenMember(String name);

    List<Member> getAllTraineesOfEmployee (Integer empId);

}
