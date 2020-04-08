package mk.ukim.finki.wp.project.fitness.service.impl;

import mk.ukim.finki.wp.project.fitness.models.Employee;
import mk.ukim.finki.wp.project.fitness.models.Member;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidEmployeeIdException;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidMemberIdException;
import mk.ukim.finki.wp.project.fitness.repository.JpaEmployeeRepository;
import mk.ukim.finki.wp.project.fitness.repository.JpaMemberRepository;
import mk.ukim.finki.wp.project.fitness.service.TrainingService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrainingServiceImpl implements TrainingService {

    private final JpaEmployeeRepository employeeRepository;

    private final JpaMemberRepository memberRepository;

    public TrainingServiceImpl(JpaEmployeeRepository employeeRepository, JpaMemberRepository memberRepository) {
        this.employeeRepository = employeeRepository;
        this.memberRepository = memberRepository;
    }

    @Override
    public void train(Integer memberId, Integer employeeId) {
        Member member = this.memberRepository.findById(memberId).orElseThrow(InvalidMemberIdException::new);
        Employee employee = this.employeeRepository.findById(employeeId).orElseThrow(InvalidEmployeeIdException::new);
        if (member.getTrainer().stream().filter(e -> e.getEmployeeId()== employeeId).collect(Collectors.toList()).size()!=0
        && employee.getTrainees().stream().filter(e -> e.getMemberId()== memberId).collect(Collectors.toList()).size()!=0)
        {
            throw new InvalidMemberIdException();
        }
        member.train(employee);
        this.memberRepository.save(member);
        this.employeeRepository.save(employee);
    }

    @Override
    public void unTrain(Integer memberId, Integer employeeId) {
        Member member = this.memberRepository.findById(memberId).orElseThrow(InvalidMemberIdException::new);
        Employee employee = this.employeeRepository.findById(employeeId).orElseThrow(InvalidEmployeeIdException::new);
        member.unTrain(employee);
        this.memberRepository.save(member);
        this.employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllTrainersOfGivenMember(String name) {
        return this.employeeRepository.findAll().stream()
                .filter(employee -> employee.getTrainees().stream()
                        .anyMatch(member -> member.getFirstName().equals(name)))
                .collect(Collectors.toList());
    }

    public List<Member> getAllTraineesOfEmployee (Integer empId) {
        return this.employeeRepository.getOne(empId).getTrainees();
    }
}
