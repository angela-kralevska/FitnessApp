package mk.ukim.finki.wp.project.fitness.controllers;

import mk.ukim.finki.wp.project.fitness.models.CardInfo;
import mk.ukim.finki.wp.project.fitness.service.CardInfoService;
import org.springframework.data.domain.Page;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/cardInfo", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class CardInfoController {
    private final CardInfoService cardInfoService;

    public CardInfoController(CardInfoService cardInfoService) {
        this.cardInfoService = cardInfoService;
    }

    @GetMapping
    public Page<CardInfo> getAllCardInfo(@RequestHeader(name = "page", defaultValue = "0", required = false) int page,
                                         @RequestHeader(name = "page-size", defaultValue = "10", required = false) int size) {
        return cardInfoService.getAllCardInfo(page, size);
    }

}
