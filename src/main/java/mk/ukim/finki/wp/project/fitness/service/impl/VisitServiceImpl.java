package mk.ukim.finki.wp.project.fitness.service.impl;

import mk.ukim.finki.wp.project.fitness.models.Card;
import mk.ukim.finki.wp.project.fitness.models.Locker;
import mk.ukim.finki.wp.project.fitness.models.Visit;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidCardIdException;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidLockerIdException;
import mk.ukim.finki.wp.project.fitness.repository.JpaCardRepository;
import mk.ukim.finki.wp.project.fitness.repository.JpaLockerRepository;
import mk.ukim.finki.wp.project.fitness.repository.JpaVisitRepository;
import mk.ukim.finki.wp.project.fitness.service.VisitService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class VisitServiceImpl implements VisitService {

    private final JpaVisitRepository visitRepository;

    private final JpaCardRepository cardRepository;

    private final JpaLockerRepository lockerRepository;

    public VisitServiceImpl(JpaVisitRepository visitRepository,
                            JpaLockerRepository lockerRepository,
                            JpaCardRepository cardRepository
    ) {
        this.visitRepository = visitRepository;
        this.lockerRepository = lockerRepository;
        this.cardRepository = cardRepository;
    }
    @Override
    public Visit createVisit(int visitId, Integer cardId, Integer lockerId, LocalDate date, LocalTime from, LocalTime to) {
        if (date == null || from == null) {
            throw new IllegalArgumentException();
        }
        Visit visit;
        Card card = this.cardRepository.findById(cardId).orElseThrow(InvalidCardIdException::new);
        Locker locker = this.lockerRepository.findById(lockerId).orElseThrow(InvalidLockerIdException::new);

        visit = Visit.createVisit(visitId, card, locker, date, from, to);

        return this.visitRepository.saveAndFlush(visit);
    }

    @Override
    public Page<Visit> getAllVisits(int page, int size) {
        return this.visitRepository.findAll(PageRequest.of(page, size, Sort.by("locker")));
    }

    @Override
    public void deleteVisit(Integer visitId) {
        this.visitRepository.deleteById(visitId);
    }
}
