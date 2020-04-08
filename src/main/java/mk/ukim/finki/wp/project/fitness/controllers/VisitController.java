package mk.ukim.finki.wp.project.fitness.controllers;

import mk.ukim.finki.wp.project.fitness.models.Visit;
import mk.ukim.finki.wp.project.fitness.service.VisitService;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.time.LocalTime;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/visits", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class VisitController {

    private final VisitService visitService;

    public VisitController(VisitService visitService){
        this.visitService = visitService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Visit createVisit(@RequestParam int visitId,
                             @RequestParam Integer cardId,
                             @RequestParam Integer lockerId,
                             @RequestParam(value = "date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
                             @RequestParam("from") @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) LocalTime from,
                             @RequestParam("to") @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) LocalTime to
                             ) {

        Visit result = visitService.createVisit(visitId, cardId, lockerId, date, from, to);
        return result;
    }

    @GetMapping
    public Page<Visit> getAllVisits(@RequestHeader(name = "page", defaultValue = "0", required = false) int page,
                                    @RequestHeader(name = "page-size", defaultValue = "10", required = false) int size) {
        return visitService.getAllVisits(page, size);
    }

    @DeleteMapping("/{visitId}")
    public void deleteVisit(@PathVariable int visitId) {
        visitService.deleteVisit(visitId);
    }

}
