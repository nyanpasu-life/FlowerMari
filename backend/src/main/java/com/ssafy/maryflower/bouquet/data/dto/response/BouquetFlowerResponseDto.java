package com.ssafy.maryflower.bouquet.data.dto.response;

import com.querydsl.core.annotations.QueryProjection;
import com.ssafy.maryflower.bouquet.data.entity.Flower;
import com.ssafy.maryflower.bouquet.data.entity.FlowerBouquet;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class BouquetFlowerResponseDto {
  private Long memberId; //nickname: memberId로 구분하기로 함.
  private Long bouquetId;
  private String imageUrl;
  private LocalDateTime createDateTime;
  private List<Flower> flowers;

  @QueryProjection
  public BouquetFlowerResponseDto(Long memberId, Long bouquetId, String imageUrl, LocalDateTime createDateTime, List<Flower> flowers) {
    this.memberId = memberId;
    this.bouquetId = bouquetId;
    this.imageUrl = imageUrl;
    this.createDateTime = createDateTime;
    this.flowers = flowers;
  }
}
