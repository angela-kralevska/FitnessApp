package mk.ukim.finki.wp.project.fitness.controllers;

import mk.ukim.finki.wp.project.fitness.models.Employee;
import mk.ukim.finki.wp.project.fitness.models.Member;
import mk.ukim.finki.wp.project.fitness.service.TrainingService;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/trainings", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class TrainingController {

    private final TrainingService trainingService;

    public TrainingController(TrainingService trainingService){
        this.trainingService = trainingService;
    }

    @PostMapping
    public void t(@RequestParam Integer memberId,
                      @RequestParam Integer employeeId) {
        trainingService.train(memberId, employeeId);
    }

    @DeleteMapping
    public void ut(@RequestParam Integer memberId,
                        @RequestParam Integer employeeId) {
        trainingService.unTrain(memberId, employeeId);
    }

    @GetMapping(path = "/{name}")
    public Collection<Employee> getAllTrainersOfGivenMember(@PathVariable(name = "name") String name) {
        return this.trainingService.getAllTrainersOfGivenMember(name);
    }

    @GetMapping(path = "/{empId}")
    public List<Member> getAllTraineesOfEmployee(@PathVariable(name = "empId") Integer empId) {
        return this.trainingService.getAllTraineesOfEmployee(empId);
    }


}
