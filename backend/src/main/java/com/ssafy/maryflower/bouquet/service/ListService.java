package com.ssafy.maryflower.bouquet.service;

import com.ssafy.maryflower.bouquet.data.dto.request.BouquetListRequestDto;
import com.ssafy.maryflower.bouquet.data.dto.response.BouquetFlowerResponseDto;
import com.ssafy.maryflower.bouquet.data.repository.BouquetRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class ListService {

  private final BouquetRepository bouquetRepository;
  public Slice<BouquetFlowerResponseDto> search(BouquetListRequestDto req, Pageable pageable) {
    return bouquetRepository.searchRelevantBouquet(req, pageable);
  }

}
