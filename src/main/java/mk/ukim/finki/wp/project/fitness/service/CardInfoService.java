package mk.ukim.finki.wp.project.fitness.service;

import mk.ukim.finki.wp.project.fitness.models.CardInfo;
import org.springframework.data.domain.Page;


public interface CardInfoService {

    Page<CardInfo> getAllCardInfo(int page, int size);

}
