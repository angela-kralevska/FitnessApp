package mk.ukim.finki.wp.project.fitness.service;

import mk.ukim.finki.wp.project.fitness.models.Card;
import org.springframework.data.domain.Page;

import java.time.LocalDate;

public interface CardService {

    Card createCard(Integer cardId, LocalDate startDate, LocalDate endDate, Integer cardInfoId);

    Page<Card> getAllCards(int page, int size);

    void deleteCard(Integer cardId);
}
