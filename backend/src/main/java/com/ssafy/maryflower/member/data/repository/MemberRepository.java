package com.ssafy.maryflower.member.data.repository;

import com.ssafy.maryflower.member.data.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
