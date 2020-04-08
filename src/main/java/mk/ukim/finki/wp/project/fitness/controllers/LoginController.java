package mk.ukim.finki.wp.project.fitness.controllers;

import mk.ukim.finki.wp.project.fitness.models.Employee;
import mk.ukim.finki.wp.project.fitness.service.LoginService;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/login", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping
    public Employee getLoggedEmployee(@RequestParam String username,
                                      @RequestParam String password) {
        return loginService.loginEmployee(username, password);
    }
}
