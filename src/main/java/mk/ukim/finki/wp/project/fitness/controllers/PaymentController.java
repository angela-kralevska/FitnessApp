package mk.ukim.finki.wp.project.fitness.controllers;

import mk.ukim.finki.wp.project.fitness.models.Payment;
import mk.ukim.finki.wp.project.fitness.service.PaymentService;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.time.LocalDate;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/payments", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Payment createPayment(@RequestParam("employeeId") Integer employeeId,
                              @RequestParam("memberId") Integer memberId,
                              @RequestParam("cardId") Integer cardId,
                              @RequestParam(value = "date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
                              ) {

        Payment result = paymentService.createPayment(employeeId, memberId, cardId, date);
        return result;
    }

    @GetMapping
    public Page<Payment> getAllPayments(@RequestHeader(name = "page", defaultValue = "0", required = false) int page,
                                        @RequestHeader(name = "page-size", defaultValue = "10", required = false) int size) {
        return paymentService.getAllPayments(page, size);
    }

    @DeleteMapping("/{paymentId}")
    public void deletePayment(@PathVariable int paymentId) {
        paymentService.deletePayment(paymentId);
    }

}
