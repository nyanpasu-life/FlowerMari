package com.ssafy.maryflower.bouquet.controller;

import com.ssafy.maryflower.bouquet.data.dto.request.BouquetListRequestDto;
import com.ssafy.maryflower.bouquet.data.dto.response.BouquetFlowerResponseDto;
import com.ssafy.maryflower.bouquet.data.repository.BouquetJpaRepository;
import com.ssafy.maryflower.bouquet.service.ListService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bouquet/list")
@RequiredArgsConstructor
@Slf4j
public class ListController {

  private final ListService listService;

  @GetMapping("")
  public ResponseEntity<Slice<BouquetFlowerResponseDto>> search(BouquetListRequestDto req, @PageableDefault(size = 4) Pageable pageable) {
    Slice<BouquetFlowerResponseDto> res = listService.search(req, pageable);
    return ResponseEntity.ok(res);
  }

}
