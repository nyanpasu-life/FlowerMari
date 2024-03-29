package com.ssafy.maryflower.bouquet.service;

import com.ssafy.maryflower.bouquet.data.dto.request.DownloadRequestDto;
import com.ssafy.maryflower.bouquet.data.entity.Bouquet;
import com.ssafy.maryflower.bouquet.data.entity.MemberBouquet;
import com.ssafy.maryflower.bouquet.data.repository.BouquetRepository;
import com.ssafy.maryflower.bouquet.data.repository.MemberBouquetRepository;
import com.ssafy.maryflower.member.data.entity.Member;
import com.ssafy.maryflower.member.data.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class DownloadService {

  private final MemberRepository memberRepository;
  private final BouquetRepository bouquetRepository;
  private final MemberBouquetRepository memberBouquetRepository;

  @Transactional
  public void downloadImage(DownloadRequestDto req) {
    // 사용자가 다운로드 요청을 보내면 memberboquet에 있는지 확인
    if(req.getMemberId() != null && req.getBouquetId()!= null) {
      Member member = memberRepository.findByMemberId(req.getMemberId());
      Bouquet bouquet = bouquetRepository.findByBouquetId(req.getBouquetId());
      MemberBouquet memberBouquet = memberBouquetRepository.findByMemberAndBouquet(member, bouquet);
      // 만일 등록되어 있지 않으면, memberbouquet에 등록하고 true 반환
      if(memberBouquet == null) {
        MemberBouquet mb = MemberBouquet.builder()
            .member(member)
            .bouquet(bouquet)
            .build();
        memberBouquetRepository.save(mb);
      }
    }
  }

}
