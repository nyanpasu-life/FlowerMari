package com.ssafy.maryflower.bouquet.data.repository;

import com.ssafy.maryflower.bouquet.data.dto.request.BouquetListRequestDto;
import com.ssafy.maryflower.bouquet.data.dto.response.BouquetFlowerResponseDto;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;

public interface BouquetRepositoryCustom {

  Slice<BouquetFlowerResponseDto> searchRelevantBouquet(BouquetListRequestDto req, Pageable pageable);
}
