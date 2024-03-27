package com.ssafy.maryflower.bouquet.data.dto.response;

import com.querydsl.core.annotations.QueryProjection;
import com.ssafy.maryflower.bouquet.data.entity.Flower;
import com.ssafy.maryflower.bouquet.data.entity.FlowerBouquet;
import lombok.Data;

import java.util.List;

@Data
public class BouquetFlowerResponseDto {
  private Long memberId;
  private Long bouquetId;
  private String imageUrl;
  private List<Flower> flowers;

  @QueryProjection
  public BouquetFlowerResponseDto(Long memberId, Long bouquetId, String imageUrl, List<Flower> flowers) {
    this.memberId = memberId;
    this.bouquetId = bouquetId;
    this.imageUrl = imageUrl;
    this.flowers = flowers;
  }
}
