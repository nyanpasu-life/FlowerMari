package com.ssafy.maryflower.bouquet.data.repository;

import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.maryflower.bouquet.data.SearchType;
import com.ssafy.maryflower.bouquet.data.dto.request.BouquetListRequestDto;
import com.ssafy.maryflower.bouquet.data.dto.response.BouquetFlowerResponseDto;
import com.ssafy.maryflower.bouquet.data.entity.Bouquet;
import io.micrometer.common.util.StringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.ssafy.maryflower.bouquet.data.entity.QBouquet.bouquet;
import static com.ssafy.maryflower.bouquet.data.entity.QFlower.flower;
import static com.ssafy.maryflower.bouquet.data.entity.QFlowerBouquet.flowerBouquet;
import static com.ssafy.maryflower.member.data.entity.QMember.member;

@RequiredArgsConstructor
@Repository
public class BouquetRepositoryCustomImpl implements BouquetRepositoryCustom {

  private final JPAQueryFactory jpaQueryFactory;

  @Override
  public Slice<BouquetFlowerResponseDto> searchRelevantBouquet(BouquetListRequestDto req, Pageable pageable) {
    int pageSize = pageable.getPageSize();
    List<BouquetFlowerResponseDto> content = jpaQueryFactory.select(
            Projections.constructor(
                BouquetFlowerResponseDto.class,
                member.memberId,
                bouquet.bouquetId,
                bouquet.imageUrl,
                flowerBouquet.flower
            ) //dto로 수정,
        )
        .from(bouquet)
        .leftJoin(bouquet.member, member)
        .leftJoin(bouquet.flowerBouquets, flowerBouquet)
        .leftJoin(flowerBouquet.flower, flower).distinct()
        .where(
            eqKeyword(req)
        )
        .orderBy(makeOrder(req))
        .offset(pageable.getOffset())
        .limit(pageSize + 1)
        .fetch();

    boolean hasNext = false;
    if (content.size() > pageSize) {
      content.remove(pageSize);
      hasNext = true;
    }

    List<BouquetFlowerResponseDto> res = content.stream().map(BouquetFlowerResponseDto::new).toList();

    return new SliceImpl(content, pageable, hasNext);
  }
//  public Slice<BouquetFlowerResponseDto> searchRelevantBouquet(BouquetListRequestDto req, Pageable pageable) {
//.
//    List<Bouquet> content = jpaQueryFactory
//        .selectFrom(bouquet)
//        .leftJoin(bouquet.flowerBouquets, flowerBouquet)
//        .leftJoin(flowerBouquet.flower, flower).distinct()
//        .where(
//            eqKeyword(req)
//        )
//        .orderBy(makeOrder(req))
//        .offset(pageable.getOffset())
//        .limit(pageable.getPageSize() + 1)
//        .fetch();
//
//    boolean hasNext = content.size() > pageable.getPageSize(); // 뒤에 더 있는지 확인
//    content = hasNext ? content.subList(0, pageable.getPageSize()) : content; // 뒤에 더 있으면 1개 더 가져온거 빼고 넘긴다
//
//    List<BouquetFlowerResponseDto> res = content.stream().map(BouquetFlowerResponseDto::new).toList();
//
//    return new SliceImpl<>(res, pageable, hasNext);
//  }
  private BooleanExpression eqKeyword(BouquetListRequestDto req) {
    if (req.getType().equals("name")) {
      return flower.koreanName.contains(req.getSearchKeyword());
    } else if(req.getType().equals("meaning")) {
      return flower.meaning.contains(req.getSearchKeyword());
    } else if(req.getType().equals("text")) {
      return bouquet.whom.contains(req.getSearchKeyword())
          .or(bouquet.situation.contains(req.getSearchKeyword()))
          .or(bouquet.message.contains(req.getSearchKeyword()));
    }
    return null;
  }

  private <T> OrderSpecifier<?> makeOrder(BouquetListRequestDto req) {
    // default는 최신순으로 가져오기로 함
    if (req.getOrderBy() == null) return new OrderSpecifier<>(Order.DESC, bouquet.createDateTime);
    return switch (req.getOrderBy()) {
      case LIKE -> new OrderSpecifier<>(Order.DESC, flowerBouquet.flower);
      case RECENT -> new OrderSpecifier<>(Order.DESC, bouquet.createDateTime);
    };
  }

}
