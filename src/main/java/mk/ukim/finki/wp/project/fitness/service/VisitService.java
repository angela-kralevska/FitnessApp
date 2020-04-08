package mk.ukim.finki.wp.project.fitness.service;

import mk.ukim.finki.wp.project.fitness.models.Card;
import mk.ukim.finki.wp.project.fitness.models.Locker;
import mk.ukim.finki.wp.project.fitness.models.Visit;
import org.springframework.data.domain.Page;

import java.time.LocalDate;
import java.time.LocalTime;

public interface VisitService {

    Visit createVisit(int visitId, Integer cardId, Integer lockerId, LocalDate date, LocalTime from, LocalTime to);

    Page<Visit> getAllVisits(int page, int size);

    void deleteVisit(Integer visitId);
}
