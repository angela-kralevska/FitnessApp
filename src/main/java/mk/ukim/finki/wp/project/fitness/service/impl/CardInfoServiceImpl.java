package mk.ukim.finki.wp.project.fitness.service.impl;

import mk.ukim.finki.wp.project.fitness.models.CardInfo;
import mk.ukim.finki.wp.project.fitness.repository.JpaCardInfoRepository;
import mk.ukim.finki.wp.project.fitness.service.CardInfoService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class CardInfoServiceImpl implements CardInfoService {

    private final JpaCardInfoRepository cardInfoRepository;

    public CardInfoServiceImpl(JpaCardInfoRepository cardInfoRepository) {
        this.cardInfoRepository = cardInfoRepository;
    }

    @Override
    public Page<CardInfo> getAllCardInfo(int page, int size) {
        return this.cardInfoRepository.findAll(PageRequest.of(page, size, Sort.by("name")));
    }
}
