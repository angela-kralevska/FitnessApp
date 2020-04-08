package mk.ukim.finki.wp.project.fitness.service.impl;

import mk.ukim.finki.wp.project.fitness.models.Card;
import mk.ukim.finki.wp.project.fitness.models.CardInfo;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidCardIdException;
import mk.ukim.finki.wp.project.fitness.repository.JpaCardInfoRepository;
import mk.ukim.finki.wp.project.fitness.repository.JpaCardRepository;
import mk.ukim.finki.wp.project.fitness.service.CardService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class CardServiceImpl implements CardService {

    private final JpaCardRepository cardRepository;

    private final JpaCardInfoRepository cardInfoRepository;

    public CardServiceImpl(JpaCardRepository cardRepository,
                            JpaCardInfoRepository cardInfoRepository
    ) {
        this.cardRepository = cardRepository;
        this.cardInfoRepository = cardInfoRepository;
    }
    @Override
    public Card createCard(Integer cardId, LocalDate startDate, LocalDate endDate, Integer cardInfoId) {
        if (startDate == null || endDate == null) {
            throw new IllegalArgumentException();
        }
        Card card;
        CardInfo cardInfo = this.cardInfoRepository.findById(cardInfoId).orElseThrow(InvalidCardIdException::new);

        card = Card.createCard(cardId, startDate, endDate, cardInfo);

        return this.cardRepository.saveAndFlush(card);
    }

    @Override
    public Page<Card> getAllCards(int page, int size) {
        return this.cardRepository.findAll(PageRequest.of(page, size, Sort.by("id")));
    }

    @Override
    public void deleteCard(Integer cardId) {
        this.cardRepository.deleteById(cardId);
    }
}
