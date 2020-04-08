package mk.ukim.finki.wp.project.fitness.controllers;

import mk.ukim.finki.wp.project.fitness.models.Card;
import mk.ukim.finki.wp.project.fitness.service.CardService;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/cards", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class CardController {

    private final CardService cardService;

    public CardController(CardService cardService){
        this.cardService = cardService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Card createCard(@RequestParam Integer cardId,
                           @RequestParam(value = "startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
                           @RequestParam(value = "endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
                           @RequestParam Integer cardInfoId
    ) {

        Card result = cardService.createCard(cardId, startDate, endDate, cardInfoId);
        return result;
    }

    @GetMapping
    public Page<Card> getAllCards(@RequestHeader(name = "page", defaultValue = "0", required = false) int page,
                                    @RequestHeader(name = "page-size", defaultValue = "10", required = false) int size) {
        return cardService.getAllCards(page, size);
    }

    @DeleteMapping("/{cardId}")
    public void deleteCard(@PathVariable int cardId) {
        cardService.deleteCard(cardId);
    }
}
